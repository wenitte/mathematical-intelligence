# 

Source: https://proofwiki.org/wiki/Integers_are_Countably_Infinite

Theorem
The set $\Z$ of integers is countably infinite.


Proof
Define the inclusion mapping $i: \N \to \Z$.
From Inclusion Mapping is Injection, $i: \N \to \Z$ is an injection.
Thus there exists an injection from $\N$ to $\Z$.
Hence $\Z$ is infinite.

Next, let us arrange $\Z$ in the following order:

$\Z = \set {0, 1, -1, 2, -2, 3, -3, \ldots}$
Then we can directly see that we can define a mapping $\phi: \Z \to \N$ as follows:

$\forall x \in \Z: \map \phi x = \begin{cases} 2 x - 1 & : x > 0 \\ -2 x & : x \le 0 \end{cases}$

This is shown to be an injection as follows:
Let $\map \phi x = \map \phi y$.
Then one of the following applies:

$(1): \quad -2 x = -2 y$ in which case $x = y$
$(2): \quad 2 x - 1 = 2 y - 1$ in which case $2 x = 2 y$ and so $x = y$
$(3): \quad 2 x - 1 = -2 y$ in which case $y = -x + \frac 1 2$ and therefore $y \notin \Z$
$(4): \quad 2 y - 1 = -2 x$ in which case $x = -y + \frac 1 2$ and therefore $x \notin \Z$.
So $2 x - 1 = -2 y$ and $2 y - 1 = -2 x$ can't happen and so $x = y$.
Thus $\phi$ is injective.
The result follows from Domain of Injection to Countable Set is Countable.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 1.1$. Sets: Example $6$
1968: A.N. Kolmogorov and S.V. Fomin: Introductory Real Analysis ... (previous) ... (next): $\S 2.2$: Countable sets: Example $1$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Mappings: $\S 15$
1971: Wilfred Kaplan and Donald J. Lewis: Calculus and Linear Algebra ... (previous) ... (next): Introduction: Review of Algebra, Geometry, and Trigonometry: $\text{0-1}$: The Real Numbers
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 7$: Countable and Uncountable Sets: Example $1$
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $2.5 \ \text{(iii)}$
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): Appendix $\text{A}$: Set Theory: Countable Sets
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $1$: General Background: $\S 2$ Countable or uncountable?




