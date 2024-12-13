# 

Source: https://proofwiki.org/wiki/Ordering_on_Cuts_is_Total

Theorem
Let $\CC$ denote the set of cuts.
Let $<$ denote the strict ordering on cuts defined as:

$\forall \alpha, \beta \in \CC: \alpha < \beta \iff \exists p \in \Q: p \in \alpha, p \notin \beta$

Then $<$ is a (strict) total ordering on $\CC$.


Proof
Let $\struct {\CC, <}$ denote the relational structure defined from the above.
From Ordering on Cuts is Transitive, $<$ is a transitive relation on $\CC$.
From Ordering on Cuts satisfies Trichotomy Law, we have that:

$\alpha < \beta \implies \lnot \paren {\beta < \alpha}$
demonstrating that $<$ is asymmetric.
Hence, by definition, $<$ is a strict ordering.
Also by Ordering on Cuts satisfies Trichotomy Law, $\struct {\CC, <}$ has no non-comparable pairs:

$\forall \alpha, \beta \in \CC: \alpha \ne \beta \implies \alpha < \beta \lor \beta < \alpha$
The result follows by definition of strict total ordering.
$\blacksquare$


Sources
1964: Walter Rudin: Principles of Mathematical Analysis (2nd ed.) ... (previous) ... (next): Chapter $1$: The Real and Complex Number Systems: Dedekind Cuts: $1.11$. Theorem




