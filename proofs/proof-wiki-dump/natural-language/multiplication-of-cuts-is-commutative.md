# 

Source: https://proofwiki.org/wiki/Multiplication_of_Cuts_is_Commutative

Theorem
Let $\alpha$ and $\beta$ be cuts.
Let the $\alpha \beta$ be the product of $\alpha$ and $\beta$.

Then:

$\alpha \beta = \beta \alpha$


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
$0^*$ denotes the rational cut associated with the (rational) number $0$
$\ge$ denotes the ordering on cuts.

Let $\alpha \ge 0^*$ and $\beta \ge 0^*$.

$\gamma := \alpha \beta$
where $\gamma$ is the set of all rational numbers $r$ such that:

$\exists p \in \alpha, q \in \beta: r = p q$

$\alpha \beta$ is the set of all rational numbers $r$ either of the form $r < 0$ of the form $r = p q$ such that $p \in \alpha$ and $q \in \beta$.
Similarly, $\beta \alpha$ is the set of all rational numbers $r$ either of the form $r < 0$ of the form $r = q p$ such that $p \in \alpha$ and $q \in \beta$.

From Rational Multiplication is Commutative we have that:

$p q = q p$

Thus we have that:

$\size \alpha \, \size \beta = \size \beta \, \size \alpha$
and the result follows.
$\blacksquare$


Sources
1964: Walter Rudin: Principles of Mathematical Analysis (2nd ed.) ... (previous) ... (next): Chapter $1$: The Real and Complex Number Systems: Dedekind Cuts: $1.26$. Theorem $\text {(a)}$




