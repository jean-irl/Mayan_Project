

function dec2Mayan(op) 
        {
            
            //Conversion de numero decimal a numero Maya
            num = parseInt(document.getElementById("id_num").value);
            //Verficacion del Numero arabigo este dentro del rango
            if(num > 400 ||num < 0){
                alert("Inserte un numero entre 0 y 400");
                
            } else{

            document.getElementById("id_niv3").value = op.toString();
            document.getElementById("id_niv2").value = op.toString();
            document.getElementById("id_niv1").value = op.toString();

            if(op == 'printMaya')
            {  
            //Nivel 3 Conversion DEC-MAYA
            Rnum3 = num % 400;
            Snum3 = num / 400;
            if(Math.trunc(Snum3) <= 0)
            {
                document.getElementById("id_niv3").value = " ";
            }
            else 
            {
                document.getElementById("id_niv3").value = Snum3.toString();
            }
            //Nivel 2 Conversion DEC-MAYA
            Rnum2 = num % 20;
            Snum2 = Rnum3 / 20;
            if(Snum3 == 1)
            {
                Snum2 = Math.trunc(Snum2);
                document.getElementById("id_niv2").value = Snum2.toString();
            }

            else if(Math.trunc(Snum2) <= 0)
            {
                document.getElementById("id_niv2").value = " ";
            }
            else 
            {
                Snum2 = Math.trunc(Snum2);
                document.getElementById("id_niv2").value = Snum2.toString();
            }

            //Nivel 1 Conversion DEC-MAYA
            Rnum1 = num % 1;
            Snum1 = Rnum2 / 1;
    
            document.getElementById("id_niv1").value = Snum1.toString();
            }

            }
            
        }

        function imprimirMaya(op)
        {
            

            var imagen3 = " "
            var imagen2 = " "
            var imagen1 = " "

            if(op == 'printMaya')
            {
                
            switch(Snum3)
            {
                case 1: 
                imagen3 = 'img/M1.png'; 
                imagen2 = 'img/M0.png';
                imagen1 = 'img/M0.png';
                break;
            }

            
           
            if(Snum2 == 1)
            {
                imagen2 = 'img/M1.png';
            }

            if(Snum2 == 2)
            {
                imagen2 = 'img/M2.png';
            }

            if(Snum2 == 3)
            {
                imagen2 = 'img/M3.png';
            }

            if(Snum2 == 4)
            {
                imagen2 = 'img/M4.png';
            }

            if(Snum2 == 5)
            {
                imagen2 = 'img/M5.png';
            }

            if(Snum2 == 6)
            {
                imagen2 = 'img/M6.png';
            }

            if(Snum2 == 7)
            {
                imagen2 = 'img/M7.png';
            }

            if(Snum2 == 8)
            {
                imagen2 = 'img/M8.png';
            }

            if(Snum2 == 9)
            {
                imagen2 = 'img/M9.png';
            }

            if(Snum2 == 10)
            {
                imagen2 = 'img/M10.png';
            }

            if(Snum2 == 11)
            {
                imagen2 = 'img/M11.png';
            }
            
            if(Snum2 == 12)
            {
                imagen2 = 'img/M12.png';
            }
            
            if(Snum2 == 13)
            {
                imagen2 = 'img/M13.png';
            }
            
            if(Snum2 == 14)
            {
                imagen2 = 'img/M14.png';
            }
            
            if(Snum2 == 15)
            {
                imagen2 = 'img/M15.png';
            }

            if(Snum2 == 16)
            {
                imagen2 = 'img/M16.png';
            }
            
            if(Snum2 == 17)
            {
                imagen2 = 'img/M17.png';
            }
            
            if(Snum2 == 18)
            {
                imagen2 = 'img/M18.png';
            }

            if(Snum2 == 19)
            {
                imagen2 = 'img/M19.png';
            }
            
            
            
            
            if (Snum1 == 0)
            {
                imagen1 = 'img/M0.png';
            }

            if (Snum1 == 1)
            {
                imagen1 = 'img/M1.png';
            }

            if (Snum1 == 2)
            {
                imagen1 = 'img/M2.png';
            }

            if (Snum1 == 3)
            {
                imagen1 = 'img/M3.png';
            }

            if (Snum1 == 4)
            {
                imagen1 = 'img/M4.png';
            }

            if (Snum1 == 5)
            {
                imagen1 = 'img/M5.png';
            }

            if (Snum1 == 6)
            {
                imagen1 = 'img/M6.png';
            }

            if (Snum1 == 7)
            {
                imagen1 = 'img/M7.png';
            }

            if (Snum1 == 8)
            {
                imagen1 = 'img/M8.png';
            }

            if (Snum1 == 9)
            {
                imagen1 = 'img/M9.png';
            }

            if (Snum1 == 10)
            {
                imagen1 = 'img/M10.png';
            }

            if (Snum1 == 11)
            {
                imagen1 = 'img/M11.png';
            }

            if (Snum1 == 12)
            {
                imagen1 = 'img/M12.png';
            }

            if (Snum1 == 13)
            {
                imagen1 = 'img/M13.png';
            }

            if (Snum1 == 14)
            {
                imagen1 = 'img/M14.png';
            }

            if (Snum1 == 15)
            {
                imagen1 = 'img/M15.png';
            }

            if (Snum1 == 16)
            {
                imagen1 = 'img/M16.png';
            }

            if (Snum1 == 17)
            {
                imagen1 = 'img/M17.png';
            }

            if (Snum1 == 18)
            {
                imagen1 = 'img/M18.png';
            }

            if (Snum1 == 19)
            {
                imagen1 = 'img/M19.png';
            }

            document.getElementById("ImageN3").src=imagen3
            document.getElementById("ImageN2").src=imagen2
            document.getElementById("ImageN1").src=imagen1   

            }
        }



