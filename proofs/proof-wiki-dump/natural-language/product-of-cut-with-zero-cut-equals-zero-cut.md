# 

Source: https://proofwiki.org/wiki/Product_of_Cut_with_Zero_Cut_equals_Zero_Cut

Theorem
Let $\alpha$ be a cut.
Let $0^*$ denote the rational cut associated with the (rational) number $0$.

Then:

$\alpha 0^* = 0^*$
where $\alpha 0^*$ denotes the product of $\alpha$ and $0^*$.


Proof
By definition, we have that:

$\alpha \beta := \begin {cases}
\size \alpha \, \size \beta & : \alpha \ge 0^*, \beta \ge 0^* \\
-\paren {\size \alpha \, \size \beta} & : \alpha < 0^*, \beta \ge 0^* \\
-\paren {\size \alpha \, \size \beta} & : \alpha \ge 0^*, \beta < 0^* \\
\size \alpha \, \size \beta & : \alpha < 0^*, \beta < 0^*
\end {cases}$
where:

$\size \alpha$ denotes the absolute value of $\alpha$
$\size \alpha \, \size \beta$ is defined as in Multiplication of Positive Cuts
$\ge$ denotes the ordering on cuts.

From Absolute Value of Cut is Zero iff Cut is Zero:

$\size {0^*} = 0^*$
Thus:

$\alpha 0^* := \begin {cases}
\size \alpha \, 0^* & : \alpha \ge 0^* \\
-\paren {\size \alpha \, 0^*} & : \alpha < 0^*
\end {cases}$

From Absolute Value of Cut is Greater Than or Equal To Zero Cut, we have that:

$\size \alpha = \beta$
where $\beta \ge 0^*$.
By definition of Multiplication of Positive Cuts:
$\beta 0^*$ is the set of all rational numbers $r$ such that either:

$r < 0$
or

$\exists p \in \beta, q \in 0^*: r = p q$
where $p \ge 0$ and $q \ge 0$
By definition of $0^*$, it is not possible for $q \ge 0$.
Thus:

$\beta 0^* = \set {r \in \Q: r < 0}$
Hence by definition of a cut:

$\beta 0^* = 0^*$
By Identity Element for Addition of Cuts and definition of negative of cut:

$-0^* = 0^*$
and the result follows.
$\blacksquare$


Sources
1964: Walter Rudin: Principles of Mathematical Analysis (2nd ed.) ... (previous) ... (next): Chapter $1$: The Real and Complex Number Systems: Dedekind Cuts: $1.26$. Theorem $\text {(d)}$




