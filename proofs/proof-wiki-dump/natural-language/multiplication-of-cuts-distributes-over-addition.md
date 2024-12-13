# 

Source: https://proofwiki.org/wiki/Multiplication_of_Cuts_Distributes_over_Addition

Theorem
Let $\alpha$, $\beta$ and $\gamma$ be cuts.
Let:

$\alpha + \beta$ denote the sum of $\alpha$ and $\beta$.
$\alpha \beta$ denote the product of $\alpha$ and $\beta$.

Then:

$\alpha \paren {\beta + \gamma} = \alpha \beta + \alpha \gamma$


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

Let $\alpha \ge 0^*$, $\beta \ge 0^*$ and $\gamma \ge 0^*$.
$\alpha \paren {\beta + \gamma}$ is the set of all rational numbers $s$ of the form:

$s = p \paren {q + r}$
such that:

$s < 0$
or:

$p \in \alpha$, $q \in \beta$ and $r \in \gamma$.

$\alpha \beta + \alpha \gamma$ is the set of all rational numbers $s$ of the form:

$s = p q + p r$
such that:

$s < 0$
or:

$p \in \alpha$, $q \in \beta$ and $r \in \gamma$.
From Rational Multiplication Distributes over Addition:
$p \paren {q + r} = p q + p r$
and the result follows.
$\blacksquare$


Sources
1964: Walter Rudin: Principles of Mathematical Analysis (2nd ed.) ... (previous) ... (next): Chapter $1$: The Real and Complex Number Systems: Dedekind Cuts: $1.26$. Theorem $\text {(c)}$




