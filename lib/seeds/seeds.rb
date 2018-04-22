require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'zones-raw.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Zone.new
  t.row_id = row['row_id']
  t.status = row['status']
  t.zone = row['zone']
  t.odd_even = row['odd_even']
  t.address_range_low = row['address_range_low']
  t.address_range_high = row['address_range_high']
  t.street_direction = row['street_direction']
  t.street_name = row['street_name']
  t.street_type = row['street_type']
  t.second_street_direction = row['second_street_direction']
  t.buffer = row['buffer']
  t.ward_low = row['ward_low']
  t.ward_low = row['ward_high']
  t.save
  puts "\n#{lineno} zone entries imported."
end


print "done."
print "\n#{lineno} zone entries imported."
