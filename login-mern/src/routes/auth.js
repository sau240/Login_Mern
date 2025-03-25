

// Reset Password Route
router.post("/reset-password/:token", async (req, res) => {
    try {
        const { token } = req.params;
        const { newPassword } = req.body;

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decoded.id, resetToken: token });

        if (!user) return res.status(400).json({ message: "Invalid or expired token" });

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        user.resetToken = null;
        user.resetTokenExpiry = null;
        await user.save();

        res.status(200).json({ message: "Password updated successfully" });

    } catch (error) {
        res.status(400).json({ message: "Invalid token or expired" });
    }
});

export default router;



