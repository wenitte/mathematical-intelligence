# 

Source: https://proofwiki.org/wiki/Element_to_Power_of_Multiple_of_Order_is_Identity



Theorem
Let $G$ be a group whose identity is $e$.
Let $a \in G$ have finite order such that $\order a = k$.

Then:

$\forall n \in \Z: k \divides n \iff a^n = e$
where $k \divides n$ denotes that $k$ is a divisor of $n$.


Proof
Let $k \in \N$ be the smallest such that $a^k = e$ as per the hypothesis.


Necessary Condition
Let $a^n = e$.
Let $n = q k + r, 0 \le r < k$.
By Element to Power of Remainder:

$a^r = a^n = e$
But $0 \le r < k$.
Since $k$ is the smallest such that $a^k = e$:

$1 \le s < k \implies a^s \ne e$
Thus $r = 0$.
That is:

$k \divides n$


Sufficient Condition
Suppose $k \divides n$.
Then:

$\exists s \in \Z: n = s k$
So:














\(\ds a^n\)

\(=\)







\(\ds a^{s k}\)




















\(\ds \)

\(=\)







\(\ds \paren {a^k}^s\)




















\(\ds \)

\(=\)







\(\ds e^s\)




















\(\ds \)

\(=\)







\(\ds e\)









$\blacksquare$


Sources
1964: Walter Ledermann: Introduction to the Theory of Finite Groups (5th ed.) ... (previous) ... (next): Chapter $\text {I}$: The Group Concept: $\S 8$: The Order (Period) of an Element: Theorem $3$
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 5.4$. Cyclic groups: Example $101$
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.4$: Theorem $3 \ (2)$
1978: John S. Rose: A Course on Group Theory ... (previous) ... (next): $0$: Some Conventions and some Basic Facts
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 38.4$ Period of an element: $\text{(ii)}$




