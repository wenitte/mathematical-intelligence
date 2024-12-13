# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/83_-_Three_Different_Digits/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $83$
Three Different Digits
Find all $3$-digit numbers with distinct digits that are divisible by the square of the sum of those digits.


Solution
$162$, $243$, $324$, $392$, $405$, $512$, $605$, $648$, $810$ and $972$.


Proof 1
From On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008), we have A072081, which provides us with all the numbers divisible by the square of the sum of their digits in base $10$:

$1, 10, 20, 50, 81, 100, 112, 162, 200, 243, 324, 392, 400, 405, 500, 512, 605, 648, 810, 972, 1000, \ldots$
from which we pick up those required.
$\blacksquare$


Proof 2
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


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $83$. -- Three Different Digits
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $122$. Three Different Digits




