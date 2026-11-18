import rateLimit from "express-rate-limit";

const contactLimite = rateLimit({
    windowMs: 15 *60 *1000,
    limit: 5,
    message: {
        message: "Too many requests. Try again later."
    }
});

export default contactLimite;