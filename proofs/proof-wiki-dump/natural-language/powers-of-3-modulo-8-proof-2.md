# 

Source: https://proofwiki.org/wiki/Powers_of_3_Modulo_8/Proof_2

Theorem
Let $n \in \Z_{\ge 0}$ be a strictly positive integer.
Then:

$3^n \equiv \begin {cases} 1 \pmod 8 & : \text {$n$ even} \\ 3 \pmod 8 & : \text {$n$ odd} \end {cases}$


Proof
Let the statement be rewritten as:
For all $r \in \Z_{\ge 0}$: 

$3^r \equiv \begin {cases} 1 \pmod 8 & : r = 2 n \\ 3 \pmod 8 & : r = 2 n + 1 \end {cases}$
where $n \in \Z_{\ge 0}$.
We have:














\(\ds 3^2\)

\(=\)







\(\ds 9\)




















\(\ds \)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod 8\)












\(\ds \leadsto \ \ \)





\(\ds \paren {3^2}^n\)

\(\equiv\)







\(\ds 1^n\)

\(\ds \pmod 8\)



Congruence of Powers








\(\ds \leadsto \ \ \)





\(\ds 3^{2 n}\)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod 8\)








Then we have:














\(\ds 3^{2 n + 1}\)

\(=\)







\(\ds 3 \times 3^{2 n}\)




















\(\ds \)

\(\equiv\)







\(\ds 3 \times 1\)

\(\ds \pmod 8\)



Congruence of Product



and the result follows.
$\blacksquare$





