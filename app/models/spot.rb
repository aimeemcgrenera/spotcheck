
class Spot < ApplicationRecord
  validates_presence_of :address_number, :street_name
  validates :street_direction, inclusion: { in: %w(N S E W n s e w),
    message: "%{value} is not a valid direction, please enter N S E or W" }
  before_save :uppercase, :assign_parity

    #street types: AVE, BLVD, ST, PL, TER, RD, PKWY, DR, CT, LN, WAY

    def uppercase
      self.street_name.upcase!
      self.street_direction.upcase!
    end

    def assign_parity
      self.address_number.to_i.even? ? self.odd_even = "E" : self.odd_even = "O"
    end

    def numberRange(address_number)
    address_number >= Zone.address_range_low && address_number <= Zone.address_range_high ? "Permit Zone" : "Not a Permit Zone"
    end

end
