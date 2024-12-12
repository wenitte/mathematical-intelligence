# 

Source: https://proofwiki.org/wiki/Casting_Out_Nines



Proof Technique
Casting out nines is a technique for checking that the result of an addition sum is correct.
Let $a$ and $b$ be two integers for which their sum:

$c = a + b$
is to be calculated.

For each of $a$ and $b$, expressed in conventional decimal notation, the digital root is extracted.
These are added together, and the digital root of the result is extracted.
During this process, any occurrences of the digit $9$ can be cast out, as they have no effect on the digital root.
If that digital root of the sum of the digital roots of $a$ and $b$ do not match the digital root of $c$, it means something must have gone wrong with the addition.


Proof
From Digital Root is Preserved by Addition:

$\dr c = \dr {\dr a + \dr b}$
where $\dr a$ denotes the digital root of $a$.


This needs considerable tedious hard slog to complete it.In particular: Finish off about what happens when the numbers include one or more $9$sTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Hence the result.
$\blacksquare$


Examples
$61 \, 934$ and $38 \, 247$
We have:














\(\ds \dr {61 \, 934}\)

\(=\)







\(\ds 5\)




















\(\ds \dr {38 \, 247}\)

\(=\)







\(\ds 6\)














\(\ds \leadsto \ \ \)





\(\ds \dr {61 \, 934 + 38 \, 247}\)

\(=\)







\(\ds 2\)




















\(\ds \dr {61 \, 934 - 38 \, 247}\)

\(=\)







\(\ds 8\)




















\(\ds \dr {61 \, 934 \times 38 \, 247}\)

\(=\)







\(\ds 3\)











Historical Note
The technique of Casting Out Nines was probably an invention of the mathematicians of early India.
It appears in Bhaskara II Acharya's Lilavati, dating from about $1150$.
It arrived in Western Europe from the Arabs, via the Liber Abaci of $1202$ by Leonardo Fibonacci.
When initially invented, the technique involved dividing the numbers involved by $9$ and adding the remainders, but the summing of the digital roots has the same effect.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $9$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $9$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): casting out nines




