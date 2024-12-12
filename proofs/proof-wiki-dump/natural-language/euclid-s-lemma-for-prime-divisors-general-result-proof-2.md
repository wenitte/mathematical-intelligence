# 

Source: https://proofwiki.org/wiki/Euclid%27s_Lemma_for_Prime_Divisors/General_Result/Proof_2



Lemma
Let $p$ be a prime number.
Let $\ds n = \prod_{i \mathop = 1}^r a_i$.

Then if $p$ divides $n$, it follows that $p$ divides $a_i$ for some $i$ such that $1 \le i \le r$.

That is:

$p \divides a_1 a_2 \ldots a_n \implies p \divides a_1 \lor p \divides a_2 \lor \cdots \lor p \divides a_n$


Proof
Proof by induction:
For all $r \in \N_{>0}$, let $\map P r$ be the proposition:

$\ds p \divides \prod_{i \mathop = 1}^r a_i \implies \exists i \in \closedint 1 r: p \divides a_i$

$\map P 1$ is true, as this just says $p \divides a_1 \implies p \divides a_1$.


Basis for the Induction
$\map P 2$ is the case:

$p \divides a_1 a_2 \implies p \divides a_2$ or $p \divides a_2$
which is proved in Euclid's Lemma for Prime Divisors.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.
So this is our induction hypothesis:

$\ds p \divides \prod_{i \mathop = 1}^k a_i \implies \exists i \in \closedint 1 k: p \divides a_i$

Then we need to show:

$\ds p \divides \prod_{i \mathop = 1}^{k + 1} a_i \implies \exists i \in \closedint 1 {k + 1}: p \divides a_i$


Induction Step
This is our induction step:














\(\ds p\)

\(\divides\)







\(\ds a_1 a_2 \ldots a_{k + 1}\)














\(\ds \leadsto \ \ \)





\(\ds p\)

\(\divides\)







\(\ds \paren {a_1 a_2 \ldots a_k} \paren {a_{k + 1} }\)














\(\ds \leadsto \ \ \)





\(\ds p\)

\(\divides\)







\(\ds a_1 a_2 \ldots a_k \lor p \divides a_{k + 1}\)





Basis for the Induction








\(\ds \leadsto \ \ \)





\(\ds p\)

\(\divides\)







\(\ds a_1 \lor p \divides a_2 \lor \ldots \lor p \divides a_k \lor p \divides a_{k + 1}\)





Induction Hypothesis



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \forall r \in \N: p \divides \prod_{i \mathop = 1}^r a_i \implies \exists i \in \closedint 1 r: p \divides a_i$
$\blacksquare$


Source of Name
This entry was named for Euclid.


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $3$: The Integers: $\S 12$. Primes: Theorem $21 \ \text{(ii)}$
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-2}$ Divisibility: Corollary $\text {2-4}$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 12.6$: Highest common factors and Euclid's algorithm
1982: Martin Davis: Computability and Unsolvability (2nd ed.) ... (previous) ... (next): Appendix $1$: Some Results from the Elementary Theory of Numbers: Corollary $9$




