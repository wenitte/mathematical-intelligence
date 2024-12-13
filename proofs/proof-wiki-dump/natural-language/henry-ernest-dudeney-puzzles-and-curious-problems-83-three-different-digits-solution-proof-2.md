# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/83_-_Three_Different_Digits/Solution/Proof_2

Puzzles and Curious Problems by Henry Ernest Dudeney: $83$
Three Different Digits
Find all $3$-digit numbers with distinct digits that are divisible by the square of the sum of those digits.


Solution
$162$, $243$, $324$, $392$, $405$, $512$, $605$, $648$, $810$ and $972$.


Proof
Here is the source code of a program in C which finds them all:

   #include <stdio.h>
   
   int main()
   {
       for (int i = 100; i < 1000; i++)
       {
           int a = i / 100;
           int b = (i / 10) % 10;
           int c = i % 10;
           if (a != b && b != c && c!= a && i % ((a + b + c)*(a + b + c)) == 0)
               printf("%d, ", i);
       }
   }

Output:

 162, 243, 324, 392, 405, 512, 605, 648, 810, 972, 

Try it online!
$\blacksquare$





