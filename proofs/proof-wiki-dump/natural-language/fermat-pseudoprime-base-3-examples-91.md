# 

Source: https://proofwiki.org/wiki/Fermat_Pseudoprime/Base_3/Examples/91

Theorem
The smallest Fermat pseudoprime to base $3$ is $91$:

$3^{91} \equiv 3 \pmod {91}$
despite the fact that $91$ is not prime:

$91 = 7 \times 13$


Proof
We have that:














\(\ds 3^{91}\)

\(=\)







\(\ds 26 \, 183 \, 890 \, 704 \, 263 \, 137 \, 277 \, 674 \, 192 \, 438 \, 430 \, 182 \, 020 \, 124 \, 347\)




















\(\ds \)

\(=\)







\(\ds 26 \, 183 \, 890 \, 704 \, 263 \, 137 \, 277 \, 674 \, 192 \, 438 \, 430 \, 182 \, 020 \, 124 \, 344 + 3\)




















\(\ds \)

\(=\)







\(\ds 91 \times 287 \, 735 \, 062 \, 684 \, 210 \, 299 \, 754 \, 661 \, 455 \, 367 \, 364 \, 637 \, 583 \, 784 + 3\)














\(\ds \leadsto \ \ \)





\(\ds 3^{91}\)

\(\equiv\)







\(\ds 3 \pmod {91}\)









Here we define Fermat pseudoprime to base $3$ to be a composite number $n$ such that (a slightly stronger result):

$3^{n - 1} \equiv 1 \pmod n$
Otherwise we have:

$3^6 = 729 \equiv 3 \pmod 6$

Following our definition, we see that a Fermat pseudoprime to base $3$ cannot be divisible by $3$:














\(\ds 3^{3 k - 1}\)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod 3\)


















\(\ds \)

\(\not \equiv\)







\(\ds 1\)

\(\ds \pmod {3 k}\)







neither can it be divisible by $4$:














\(\ds 3^{4 k}\)

\(=\)







\(\ds \paren {3^{2 k} }^2\)




















\(\ds \)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod 4\)



Square Modulo 4














\(\ds \)

\(\not \equiv\)







\(\ds 3\)

\(\ds \pmod {4 k}\)







nor $10$:














\(\ds 3^{10 k}\)

\(=\)







\(\ds \paren {3^{5 k} }^2\)




















\(\ds \)

\(\equiv\)







\(\ds \pm 1\)

\(\ds \pmod 5\)



Square Modulo 5














\(\ds \)

\(\not \equiv\)







\(\ds 3\)

\(\ds \pmod {10 k}\)








Also such a number cannot be equal to twice a prime greater than $3$:














\(\ds 3^{2 p}\)

\(\equiv\)







\(\ds 3^2\)

\(\ds \pmod p\)



Fermat's Little Theorem














\(\ds \)

\(\not \equiv\)







\(\ds 3\)

\(\ds \pmod p\)



Since $p \nmid 6 = 2 \times 3$








\(\ds \leadsto \ \ \)





\(\ds 3^{2 p}\)

\(\not \equiv\)







\(\ds 3\)

\(\ds \pmod {2 p}\)







nor five times a prime greater than $5$:














\(\ds 3^{5 p}\)

\(\equiv\)







\(\ds 3^5\)

\(\ds \pmod p\)



Fermat's Little Theorem














\(\ds \)

\(\not \equiv\)







\(\ds 3\)

\(\ds \pmod p\)



Since $p \nmid 240 = 2^4 \times 3 \times 5$








\(\ds \leadsto \ \ \)





\(\ds 3^{5 p}\)

\(\not \equiv\)







\(\ds 3\)

\(\ds \pmod {5 p}\)








Therefore only the following numbers less than $91$ remain:

$25, 49, 77$
and we check:














\(\ds 3^{25}\)

\(=\)







\(\ds 847 \, 288 \, 609 \, 443\)




















\(\ds \)

\(=\)







\(\ds 33 \, 891 \, 544 \, 377 \times 25 + 18\)














\(\ds \leadsto \ \ \)





\(\ds 3^{25}\)

\(\equiv\)







\(\ds 18 \pmod {25}\)




















\(\ds 3^{49}\)

\(=\)







\(\ds 239 \, 299 \, 329 \, 230 \, 617 \, 529 \, 590 \, 083\)




















\(\ds \)

\(=\)







\(\ds 4 \, 883 \, 659 \, 780 \, 216 \, 684 \, 277 \, 348 \times 49 + 31\)














\(\ds \leadsto \ \ \)





\(\ds 3^{49}\)

\(\equiv\)







\(\ds 31 \pmod {49}\)




















\(\ds 3^{77}\)

\(=\)







\(\ds 5 \, 474 \, 401 \, 089 \, 420 \, 219 \, 382 \, 077 \, 155 \, 933 \, 569 \, 751 \, 763\)




















\(\ds \)

\(=\)







\(\ds 71 \, 096 \, 118 \, 044 \, 418 \, 433 \, 533 \, 469 \, 557 \, 578 \, 827 \, 944 \times 77 + 75\)














\(\ds \leadsto \ \ \)





\(\ds 3^{77}\)

\(\equiv\)







\(\ds 75 \pmod {77}\)









hence the result.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $91$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $91$




