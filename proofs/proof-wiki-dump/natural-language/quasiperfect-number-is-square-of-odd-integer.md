# 

Source: https://proofwiki.org/wiki/Quasiperfect_Number_is_Square_of_Odd_Integer

Theorem
Let $n$ be a quasiperfect number.
Then:

$n = \paren {2 k + 1}^2$
for some $k \in \Z_{>0}$.

That is, a quasiperfect number is the square of an odd integer.


Proof
By definition of quasiperfect number:

$\map {\sigma_1} n = 2 n + 1$
where $\map {\sigma_1} n$ denotes the divisor sum of $n$.
That is, $\map {\sigma_1} n$ is odd.
Then from Divisor Sum is Odd iff Argument is Square or Twice Square:
$n$ is either square or twice a square.

Suppose $n = 2^k m^2$ is a quasiperfect number, where $m$ is odd and $k \in \Z_{\ge 0}$.
Then:














\(\ds \map {\sigma_1} n\)

\(=\)







\(\ds \map {\sigma_1} {2^k} \map {\sigma_1} {m^2}\)





Divisor Sum Function is Multiplicative














\(\ds \)

\(=\)







\(\ds \paren {2^{k + 1} - 1} \map {\sigma_1} {m^2}\)





Divisor Sum of Power of Prime














\(\ds \)

\(=\)







\(\ds 2 n + 1\)





Definition of Quasiperfect Number














\(\ds \)

\(=\)







\(\ds 2^{k + 1} m^2 + 1\)









Hence we have:

$\paren {2^{k + 1} - 1} \divides \paren {2^{k + 1} m^2 + 1}$

Since:

$\paren {2^{k + 1} - 1} \divides \paren {2^{k + 1} m^2 - m^2}$
we have:

$\paren {2^{k + 1} - 1} \divides \paren {1 + m^2}$

Aiming for a contradiction, suppose $k > 0$.
Write:

$m^2 \equiv -1 \pmod {2^{k + 1} - 1}$
But by First Supplement to Law of Quadratic Reciprocity (extended to Jacobi symbols):

$\paren {\dfrac {-1} {2^{k + 1} - 1} } = \paren {-1}^{\frac {2^{k + 1} - 1 - 1} 2} = \paren {-1}^{2^k - 1} = -1$

Work In ProgressIn particular: Maybe it is worth it to extend quadratic residue/reciprocity results to Jacobi symbols.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
Hence $-1$ is not a quadratic residue modulo $2^{k + 1} - 1$, contradicting the above.

Therefore we must have $k = 0$.
In this case, $n = m^2$, an odd square.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $16$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $16$




