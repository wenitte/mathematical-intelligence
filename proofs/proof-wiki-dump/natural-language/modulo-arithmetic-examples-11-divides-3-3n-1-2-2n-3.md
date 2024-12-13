# 

Source: https://proofwiki.org/wiki/Modulo_Arithmetic/Examples/11_Divides_3%5E3n%2B1_%2B_2%5E2n%2B3

Example of Modulo Arithmetic
$11$ is a divisor of $3^{3 n + 1} + 2^{2 n + 3}$.


Proof
We have:














\(\ds 3^{3 n + 1}\)

\(=\)







\(\ds 3 \times 3^{3 n}\)




















\(\ds \)

\(=\)







\(\ds 3 \times \paren {3^3}^n\)




















\(\ds \)

\(=\)







\(\ds 3 \times 27^n\)










Now:














\(\ds 27\)

\(\equiv\)







\(\ds 5\)

\(\ds \pmod {11}\)












\(\ds \leadsto \ \ \)





\(\ds 27^n\)

\(\equiv\)







\(\ds 5^n\)

\(\ds \pmod {11}\)



Congruence of Powers








\(\ds \leadsto \ \ \)





\(\ds 3 \times 27^n\)

\(\equiv\)







\(\ds 3 \times 5^n\)

\(\ds \pmod {11}\)



Congruence of Product








\(\ds \leadsto \ \ \)





\(\ds 3^{3 n + 1}\)

\(\equiv\)







\(\ds 3 \times 5^n\)

\(\ds \pmod {11}\)








Then we have:














\(\ds 2^{4 n + 3}\)

\(=\)







\(\ds 2^3 \times \paren {2^4}^n\)




















\(\ds \)

\(=\)







\(\ds 8 \times 16^n\)










and:














\(\ds 16\)

\(\equiv\)







\(\ds 5\)

\(\ds \pmod {11}\)












\(\ds \leadsto \ \ \)





\(\ds 16^n\)

\(\equiv\)







\(\ds 5^n\)

\(\ds \pmod {11}\)



Congruence of Powers








\(\ds \leadsto \ \ \)





\(\ds 8 \times 16^n\)

\(\equiv\)







\(\ds 8 \times 5^n\)

\(\ds \pmod {11}\)



Congruence of Product








\(\ds \leadsto \ \ \)





\(\ds 2^{4 n + 3}\)

\(\equiv\)







\(\ds 8 \times 5^n\)

\(\ds \pmod {11}\)








So:















\(\ds 3^{3 n + 1} + 2^{4 n + 3}\)

\(\equiv\)







\(\ds \paren {3 \cdot 5^n + 8 \cdot 5^n}\)

\(\ds \pmod {11}\)



Modulo Addition is Well-Defined














\(\ds \)

\(\equiv\)







\(\ds \paren {3 + 8} 5^n\)

\(\ds \pmod {11}\)


















\(\ds \)

\(\equiv\)







\(\ds 11 \times  5^n\)

\(\ds \pmod {11}\)


















\(\ds \)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod {11}\)







Hence:

$\forall n \in \N: 11 \divides \paren {3^{3 n + 1} + 2^{4 n + 3} }$
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $2$: Some Properties of $\Z$: Exercise $2.10$




