import React, { useState } from "react";
import { motion } from "framer-motion";
import { Flower2, Heart } from "lucide-react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Input,
  Typography,
} from "@material-tailwind/react";
import Layout from "./Layout/Layout";

const DonationPage_RadhaKrishna = () => {
  const [customAmount, setCustomAmount] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(null);

  const donationTiers = [501, 1001, 2100, 5100, 11000]; // Indian-style seva tiers

  const handleDonate = () => {
    const amount = Number(selectedAmount || customAmount);
    if (!amount || isNaN(amount) || amount <= 0) {
      alert("Please enter a valid positive donation amount.");
      return;
    }
    alert(`Thank you for your kind seva of ₹${amount}! 🙏`);
  };

  return (
    <Layout>
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-100 flex flex-col items-center justify-center p-6">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl mb-10"
      >
        <div className="flex justify-center mb-5">
          <Flower2 className="text-amber-500 w-14 h-14 animate-pulse" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-amber-700 mb-4 font-serif">
          Radha Krishna Gram Vikas Kendra
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          A charitable trust devoted to rural upliftment, women empowerment, and
          the propagation of spiritual and cultural values inspired by{" "}
          <span className="font-semibold text-amber-700">Sri Radha Krishna</span>.
          Your kind <span className="text-amber-700 font-semibold">seva</span> helps
          transform lives and nurture villages with compassion.
        </p>
      </motion.div>

      {/* DONATION CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-3xl"
      >
        <Card className="backdrop-blur-md bg-white/80 border border-amber-200 shadow-2xl rounded-3xl p-8">
          <Typography
            variant="h4"
            className="text-center text-amber-800 font-bold mb-8"
          >
            Offer Your Seva
          </Typography>

          {/* Donation Tiers */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
            {donationTiers.map((amount) => (
              <motion.div
                key={amount}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount("");
                  }}
                  className={`cursor-pointer border-2 transition-all ${
                    selectedAmount === amount
                      ? "border-amber-600 bg-amber-100 shadow-md"
                      : "border-transparent hover:border-amber-300"
                  }`}
                >
                  <CardHeader
                    floated={false}
                    shadow={false}
                    className="text-center py-5 bg-transparent"
                  >
                    <Typography
                      variant="h6"
                      className={`font-semibold ${
                        selectedAmount === amount
                          ? "text-amber-700"
                          : "text-gray-800"
                      }`}
                    >
                      ₹{amount}
                    </Typography>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Custom Donation Input */}
          <div className="flex flex-col items-center space-y-5">
            <div className="relative w-full max-w-sm">
              <Input
                type="number"
                label="Enter Custom Amount (₹)"
                min="1"
                value={customAmount}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value >= 0) setCustomAmount(value);
                  setSelectedAmount(null);
                }}
                className="text-center text-lg font-medium"
              />
              {customAmount < 0 && (
                <p className="text-red-500 text-sm mt-1">
                  Amount cannot be negative.
                </p>
              )}
            </div>

            <Button
              onClick={handleDonate}
              size="lg"
              ripple={true}
              className="w-full max-w-sm bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold text-lg py-3 flex items-center justify-center gap-2 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <Heart className="w-5 h-5 text-white" />
              Proceed to Donate
            </Button>

            <Typography
              variant="small"
              className="text-gray-600 text-center max-w-md leading-relaxed"
            >
              “Your contribution sustains our efforts to bring education, health,
              and hope to rural Bharat. May Lord Krishna bless you for your
              kindness.” 🙏
            </Typography>
          </div>
        </Card>
      </motion.div>
    </div>
    </Layout>
  );
};

export default DonationPage_RadhaKrishna;
