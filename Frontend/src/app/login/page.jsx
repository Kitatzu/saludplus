"use client"

import LoginModal from "@/components/LoginModal/loginModal";
import { useState } from "react";

export default function Login() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
      setIsOpen(true);
    };

    const onClose = () => {
      setIsOpen(false);
    };

    return(
        <div>
            <LoginModal  onClose={onClose} />
        </div>
    )
}