# 

Source: https://proofwiki.org/wiki/Ordering_of_Rational_Cuts_preserves_Ordering_of_Associated_Rational_Numbers

Theorem
Let $p \in\ Q$ and $q \in \Q$ be rational numbers.
Let $p^*$ and $q^*$ denote the rational cuts associated with $p$ and $q$.

Then:

$p^* < q^* \iff p < q$
where $p^* < q^*$ denotes the strict ordering on cuts defined as:

$\beta < \gamma \iff \exists p \in \Q: p \in \beta, p \notin \gamma$


Proof
Let $p < q$.
Then $p \notin p^*$ but $q \in q^*$.
Thus $p^* < q^*$ by definition of the strict ordering on cuts .

Let $p^* < q^*$.
Then:

$\exists r \in \Q: r \notin p^*, r \in q^*$
Hence:

$p \le r < q$
and so:

$p < q$
$\blacksquare$


Sources
1964: Walter Rudin: Principles of Mathematical Analysis (2nd ed.) ... (previous) ... (next): Chapter $1$: The Real and Complex Number Systems: Dedekind Cuts: $1.28$. Theorem: $\text {(c)}$




