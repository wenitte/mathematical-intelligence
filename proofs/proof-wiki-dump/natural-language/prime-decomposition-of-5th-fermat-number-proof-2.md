# 

Source: https://proofwiki.org/wiki/Prime_Decomposition_of_5th_Fermat_Number/Proof_2

Theorem
The prime decomposition of the $5$th Fermat number is given by:














\(\ds 2^{\paren {2^5} } + 1\)

\(=\)







\(\ds 4 \, 294 \, 967 \, 297\)





Sequence of Fermat Numbers














\(\ds \)

\(=\)







\(\ds 641 \times 6 \, 700 \, 417\)




















\(\ds \)

\(=\)







\(\ds \paren {5 \times 2^7 + 1} \times \paren {3 \times 17449 \times 2^7 + 1}\)











Proof
Note the remarkable coincidence that $2^4 + 5^4 = 2^7 \cdot 5 + 1 = 641$.

First we eliminate $y$ from $x^4 + y^4 = x^7 y + 1 = 0$:














\(\ds x^4 + y^4\)

\(=\)







\(\ds x^7 y + 1 = 0\)














\(\ds \leadsto \ \ \)





\(\ds -x^4\)

\(=\)







\(\ds y^4\)














\(\ds \leadsto \ \ \)





\(\ds x^{28} \paren {-x^4} + 1\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds x^{32}\)

\(=\)







\(\ds -1\)










Now we use the above result for $x = 2$ and $y = 4$ in modulo $641$:














\(\ds 2^4 + 5^4\)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod {641}\)


















\(\ds 2^7 \cdot 5\)

\(\equiv\)







\(\ds -1\)

\(\ds \pmod {641}\)












\(\ds \leadsto \ \ \)





\(\ds 2^{28} \paren {-2^4}\)

\(\equiv\)







\(\ds -1\)

\(\ds \pmod {641}\)












\(\ds \leadsto \ \ \)





\(\ds 2^{32}\)

\(\equiv\)







\(\ds -1\)

\(\ds \pmod {641}\)












\(\ds \leadsto \ \ \)





\(\ds 2^{32} + 1\)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod {641}\)








Thus $2^{\paren {2^5} } + 1 = 6 \, 700 \, 417 \times 641$ and hence is not prime.
$\blacksquare$





