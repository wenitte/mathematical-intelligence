# 

Source: https://proofwiki.org/wiki/Cube_Modulo_9

Theorem
Let $x \in \Z$ be an integer.
Then one of the following holds:














\(\ds x^3\)

\(\equiv\)







\(\ds 0 \pmod 9\)




















\(\ds x^3\)

\(\equiv\)







\(\ds 1 \pmod 9\)




















\(\ds x^3\)

\(\equiv\)







\(\ds 8 \pmod 9\)











Proof
Let $x$ be an integer.
There are three cases to consider:

$(1): \quad x \equiv 0 \pmod 3$: we have $x = 3 k$
$(2): \quad x \equiv 1 \pmod 3$: we have $x = 3 k + 1$
$(3): \quad x \equiv 2 \pmod 3$: we have $x = 3 k + 2$

Then:




\(\text {(1)}: \quad\)









\(\ds x\)

\(=\)







\(\ds 3 k\)














\(\ds \leadsto \ \ \)





\(\ds x^3\)

\(=\)







\(\ds \paren {3 k}^3\)




















\(\ds \)

\(=\)







\(\ds 3^3 k^3\)




















\(\ds \)

\(=\)







\(\ds 9 \times \paren {3 k^3}\)














\(\ds \leadsto \ \ \)





\(\ds x^3\)

\(\equiv\)







\(\ds 0 \pmod 9\)









$\Box$





\(\text {(2)}: \quad\)









\(\ds x\)

\(=\)







\(\ds 3 k + 1\)














\(\ds \leadsto \ \ \)





\(\ds x^3\)

\(=\)







\(\ds \paren {3 k + 1}^3\)




















\(\ds \)

\(=\)







\(\ds \paren {3 k}^3 + 3 \paren {3 k}^2 + 3 \paren {3 k} + 1\)




















\(\ds \)

\(=\)







\(\ds 9 \times \paren {3 k^3 + 3 k^2 + k} + 1\)














\(\ds \leadsto \ \ \)





\(\ds x^3\)

\(\equiv\)







\(\ds 1 \pmod 9\)









$\Box$





\(\text {(3)}: \quad\)









\(\ds x\)

\(=\)







\(\ds 3 k + 2\)














\(\ds \leadsto \ \ \)





\(\ds x^3\)

\(=\)







\(\ds \paren {3 k + 2}^3\)




















\(\ds \)

\(=\)







\(\ds \paren {3 k}^3 + 3 \times 2 \paren {3 k}^2 + 3 \times 2^2 \paren {3 k} + 2^3\)




















\(\ds \)

\(=\)







\(\ds 9 \times \paren {3 k^3 + 6 k^2 + 4 k} + 8\)














\(\ds \leadsto \ \ \)





\(\ds x^3\)

\(\equiv\)







\(\ds 8 \pmod 9\)









$\blacksquare$


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.1$ The Division Algorithm: Problems $2.1$: $3 \ \text{(c)}$




