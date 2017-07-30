#Separating out the different utilities

#library(readr)
#library(jsonlite)
rm(list=ls())

#setwd("~/GovHack Data")
setwd('./')
#setwd('https://opendata.arcgis.com/datasets/614c63f438cb48269b83a9fdd41b939b_0.csv')
#parkfacs= read.csv("ParkFacilityFinder_point.csv", stringsAsFactors = F, header=T)
#download.file('http://opendata.arcgis.com/datasets/614c63f438cb48269b83a9fdd41b939b_0.csv', destfile = "ParkFacilityFinder_point_test.csv")
parkfacs= read.csv('http://opendata.arcgis.com/datasets/614c63f438cb48269b83a9fdd41b939b_0.csv', stringsAsFactors = F, header=T)
write.table(cbind(parkfacs$Name, parkfacs$ï..X, parkfacs$Y), file="Parks.csv", 
            col.names = c("Name", "Longitude", "Latitude"), row.names=F, sep=",")
f1=c('Public Parks', 'Parks', nrow(parkfacs))

#playgrounds = read.csv(file="Playground.csv", stringsAsFactors = F, header = T)
playgrounds = read.csv('http://opendata.arcgis.com/datasets/ef8752ed3d9b4f6cb90c01a3f8098570_0.csv', stringsAsFactors = F,header = T)
write.table(cbind(playgrounds$Location, playgrounds$ï..X, playgrounds$Y), file= "Playgrounds.csv", 
            col.names = c("Name", "Longitude", "Latitude"), row.names = F, sep =",")
f2=c('Playgrounds', 'Playgrounds', nrow(playgrounds))

playground.dis = subset(parkfacs, parkfacs$Playground_Accessible == "Yes")
write.table(cbind(playground.dis$Name, playground.dis$ï..X, playground.dis$Y), file="Playgrounds_Disabled.csv", 
            col.names = c("Name", "Longitude", "Latitude"), row.names = F, sep =",")
f3=c('Playgrounds with Disabled Access', 'Playgrounds_Disabled', nrow(playground.dis))

playground.shade = subset(parkfacs, parkfacs$Playground_Shaded == "Yes")
write.table(cbind(playground.shade$Name, playground.shade$ï..X, playground.shade$Y), file="Playgrounds_Shaded.csv", 
            col.names = c("Name", "Longitude", "Latitude"), row.names = F, sep =",")
f4=c('Playground with Shade', 'Playgrounds_Shaded', nrow(playground.shade))

#wifi = read.csv("PublicWifi.csv", stringsAsFactors = F, header=T)
wifi= read.csv('http://opendata.arcgis.com/datasets/63c7383446724b12844bb3d72af58604_0.csv', stringsAsFactors = F, header = T)
write.table(cbind(wifi$Location, wifi$ï..X, wifi$Y), file="Wifi.csv", 
            col.names = c("Name", "Longitude", "Latitude"), row.names = F, sep =",")
f5=c('WIFI Access Points', 'Wifi', nrow(wifi))

#bbq = read.csv(file="Barbeques.csv", header=T, stringsAsFactors = F)
bbq= read.csv('http://opendata.arcgis.com/datasets/ef8752ed3d9b4f6cb90c01a3f8098570_1.csv', stringsAsFactors = F, header = T)
write.table(cbind(bbq$Location, bbq$ï..X, bbq$Y), file="BBQ.csv", 
            col.names = c("Name", "Longitude", "Latitude"), row.names = F, sep =",")
f6=c('BBQ Facilities', 'BBQ', nrow(bbq))

picnic = subset(parkfacs, parkfacs$Picnic_Tables == "Yes")
write.table(cbind(picnic$Name, picnic$ï..X, picnic$Y), file="PicnicTables.csv", 
            col.names = c("Name", "Longitude", "Latitude"), row.names = F, sep =",")
f7=c('Picnic Tables', 'PicnicTables', nrow(picnic))

fountains = subset(parkfacs, parkfacs$Drinking_Fountains=="Yes")
write.table(cbind(fountains$Name, fountains$ï..X, fountains$Y), file="Fountains.csv", 
            col.names = c("Name", "Longitude", "Latitude"), row.names = F, sep =",")
f8=c('Drinking Fountains', 'Fountains', nrow(fountains))

toilets.day = subset(parkfacs, parkfacs$Toilets_Daylight =="Yes")
write.table(cbind(toilets.day$Name, toilets.day$ï..X, toilets.day$Y), file="ToiletsDaytime.csv", 
            col.names = c("Name", "Longitude", "Latitude"), row.names = F, sep =",")
f9=c('Toilets - Daytime Hours', 'ToiletsDaytime', nrow(toilets.day))

toilets.24 = subset(parkfacs, parkfacs$Toilets_24hrs =="Yes")
write.table(cbind(toilets.24$Name, toilets.24$ï..X, toilets.24$Y), file="Toilets24.csv", 
            col.names = c("Name", "Longitude", "Latitude"), row.names = F, sep =",")
f10=c('Toilets - 24 hours', 'Toilets24', nrow(toilets.24))

showers = subset(parkfacs, parkfacs$Showers == "Yes")
write.table(cbind(showers$Name, showers$ï..X, showers$Y), file="Showers.csv", 
            col.names = c("Name", "Longitude", "Latitude"), row.names = F, sep =",")
f11=c('Showers', 'Showers', nrow(showers))

baby = subset(parkfacs, parkfacs$Baby_Change =="Yes")
write.table(cbind(baby$Name, baby$ï..X, baby$Y), file="BabyChangeRoom.csv", 
            col.names = c("Name", "Longitude", "Latitude"), row.names = F, sep =",")
f12=c('Baby Changing Room', 'BabyChangeRoom', nrow(baby))

shared.paths = subset(parkfacs, parkfacs$Bicycle_Walk_Paths =="Yes")
write.table(cbind(shared.paths$Name, shared.paths$ï..X, shared.paths$Y), file="SharedPaths.csv", 
            col.names = c("Name", "Longitude", "Latitude"), row.names = F, sep =",")
f13=c('Share Paths - Cyclists and Pedestrians', 'SharedPaths', nrow(shared.paths))

bike.racks = subset(parkfacs, parkfacs$Bike_Racks =="Yes")
write.table(cbind(bike.racks$Name, bike.racks$ï..X, bike.racks$Y), file="BikeRacks.csv", 
            col.names = c("Name", "Longitude", "Latitude"), row.names = F, sep =",")
f14=c('Bike Racks', 'BikeRacks', nrow(bike.racks))

exercise = subset(parkfacs, parkfacs$Exercise_Equipment =="Yes")
write.table(cbind(exercise$Name, exercise$ï..X, exercise$Y), file="ExerciseEquipment.csv", 
            col.names = c("Name", "Longitude", "Latitude"), row.names = F, sep =",")
f15=c('Exercise Equipments', 'ExerciseEquipment', nrow(exercise))

soccer = subset(parkfacs, parkfacs$Soccer =="Yes")
write.table(cbind(soccer$Name, soccer$ï..X, soccer$Y), file="SoccerFields.csv", 
            col.names = c("Name", "Longitude", "Latitude"), row.names = F, sep =",")
f16=c('Soccer Field', 'SoccerFields', nrow(soccer))

afl=subset(parkfacs, parkfacs$AFL =="Yes")
write.table(cbind(afl$Name, afl$ï..X, afl$Y), file="AFLfield.csv", 
            col.names = c("Name", "Longitude", "Latitude"), row.names = F, sep =",")
f17=c('AFL Fields', 'AFLfield', nrow(afl))

bball = subset(parkfacs, parkfacs$Basketball =="Yes")
write.table(cbind(bball$Name, bball$ï..X, bball$Y), file="BasketballCourts.csv", 
            col.names = c("Name", "Longitude", "Latitude"), row.names = F, sep =",")
f18=c('Basketball Courts', 'BasketballCourts', nrow(bball))

tennis=subset(parkfacs, parkfacs$Tennis =="Yes")
write.table(cbind(tennis$Name, tennis$ï..X, tennis$Y), file="TennisCourts.csv", 
            col.names = c("Name", "Longitude", "Latitude"), row.names = F, sep =",")
f19=c('Tennis Courts', 'TennisCourts', nrow(tennis))

cricket = subset(parkfacs, parkfacs$Cricket =="Yes")
write.table(cbind(cricket$Name, cricket$ï..X, cricket$Y), file="CricketField.csv", 
            col.names = c("Name", "Longitude", "Latitude"), row.names = F, sep =",")
f20=c('Cricket Fields', 'CricketField', nrow(cricket))

velodrome = subset(parkfacs, parkfacs$Cycling == "Yes")
write.table(cbind(velodrome$Name, velodrome$ï..X, velodrome$Y), file="Velodrome.csv", 
            col.names = c("Name", "Longitude", "Latitude"), row.names = F, sep =",")
f21=c('Velodrome', 'Velodrome', nrow(velodrome))

swim = subset(parkfacs, parkfacs$Swimming =="Yes")
write.table(cbind(swim$Name, swim$ï..X, swim$Y), file="SwimmingPools.csv", 
            col.names = c("Name", "Longitude", "Latitude"), row.names = F, sep =",")
f22 = c('Swimming Pools', 'SwimmingPools', nrow(swim))

skate =subset(parkfacs, parkfacs$Skateboarding =="Yes")
write.table(cbind(skate$Name, skate$ï..X, skate$Y), file="SkateboardPark.csv", 
            col.names = c("Name", "Longitude", "Latitude"), row.names = F, sep =",")
f23=c('Skateboard Parks', 'SkateboardPark', nrow(skate))

watercraft=subset(parkfacs, parkfacs$Watercraft =="Yes")
write.table(cbind(watercraft$Name, watercraft$ï..X, watercraft$Y), file="Watercraft.csv", 
            col.names = c("Name", "Longitude", "Latitude"), row.names = F, sep =",")
f24=c('Watercraft Facilities', 'Watercraft', nrow(watercraft))

rugby=subset(parkfacs, parkfacs$Rugby=="Yes")
write.table(cbind(rugby$Name, rugby$ï..X, rugby$Y), file="RugbyField.csv", 
            col.names = c("Name", "Longitude", "Latitude"), row.names = F, sep =",")
f25=c('Rugby Field', 'RugbyField', nrow(rugby))

gaelic =subset(parkfacs, parkfacs$Gaelic =="Yes")
write.table(cbind(gaelic$Name, gaelic$ï..X, gaelic$Y), file="GaelicFootballField.csv", 
            col.names = c("Name", "Longitude", "Latitude"), row.names = F, sep =",")
f26=c('Gaelic Football Fields', 'GaelicFootballField', nrow(gaelic))

softball =subset(parkfacs, parkfacs$Softball =="Yes")
write.table(cbind(softball$Name, softball$ï..X, softball$Y), file="SoftballField.csv", 
            col.names = c("Name", "Longitude", "Latitude"), row.names = F, sep =",")
f27=c('Softball Fields', 'SoftballField', nrow(softball))


#parking.meters = read.csv("CBD_Parking_Meters.csv", header = T, stringsAsFactors = F)
parking.meters = read.csv('http://opendata.arcgis.com/datasets/6f807097842e4ffa9fdd6639b7acaf31_0.csv',stringsAsFactors = F,header = T)
write.table(cbind(parking.meters$ZoneDesc, parking.meters$ï..X, parking.meters$Y), file="Parking_Metered.csv", 
            col.names = c("Type", "Longitude", "Latitude"), row.names = F, sep =",")
f28=c('Metered Parking', 'Parking_Metered', nrow(parking.meters))

street.food = read.table('http://opendata.arcgis.com/datasets/6d6453a83bbc4ab8b7591e545dd40d65_0.csv', stringsAsFactors = F, header = T,
                         sep = ',')
write.table(cbind(street.food$BusinessName, street.food$ï..X, street.food$Y, 
                  paste(street.food$WeekdaysHours, street.food$WeekendHours, street.food$PublicHolHours, sep = "<br/>"),street.food$Website),
            col.names=c('Name', 'Longitude', 'Latitude', 'Hours', 'Website'), file = 'StreetFood.csv', sep=',', row.names=F)
f29=c("Street Food", "StreetFood", nrow(street.food))

visit = data.frame('Visitor\'s Centre','130.982577', '-12.513128', 'http://www.tourismtopend.com.au/')
colnames(visit) = c('Name', 'Longitude', 'Latitude', 'Website')
write.table(visit, file='Visit.csv', row.names = F, sep=',')
f30=c('Visitor\'s Centre', 'Visit', nrow(visit))


key =as.data.frame(rbind(f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12,f13,f14,f15,f16,f17,f18,f19,f20,f21,f22,f23,f24,f25,f26,f27,f28,f29,f30))
colnames(key) = c('DisplayName', 'Filename','Instances')
key.ordered = key[order(key$DisplayName),]
write.table(key.ordered, file='FilenameKey.csv', row.names = F, sep=',')

