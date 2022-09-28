document
.getElementById("year")
.innerHTML = new Date()
                .toISOString()
                .slice(0, 10)
                .split("-")
                [0];