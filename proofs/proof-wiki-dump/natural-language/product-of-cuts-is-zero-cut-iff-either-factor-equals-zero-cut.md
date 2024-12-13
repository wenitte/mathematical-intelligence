# 

Source: https://proofwiki.org/wiki/Product_of_Cuts_is_Zero_Cut_iff_Either_Factor_equals_Zero_Cut



Theorem
Let $\alpha$ and $\beta$ be cuts.
Let $0^*$ denote the rational cut associated with the (rational) number $0$.

Then:

$\alpha \beta = 0^*$
if and only if:

$\alpha = 0^*$ or $\beta = 0^*$
where $\alpha \beta$ denotes the product of $\alpha$ and $\beta$.


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

First we note that from Absolute Value of Cut is Zero iff Cut is Zero:

$\size {0^*} = 0^*$


Necessary Condition
Let $\alpha = 0^*$ or $\beta = 0^*$.
Then from Product of Cut with Zero Cut equals Zero Cut it follows directly that:

$\alpha \beta = 0^*$
$\Box$


Sufficient Condition
Let $\alpha \beta = 0^*$.
Suppose $\alpha > 0^*$ and $\beta > 0^*$.
By definition of multiplication of positive cuts:
$\alpha \beta$ is the set of all rational numbers $r$ such that either:

$r < 0$
or

$\exists p \in \alpha, q \in \beta: r = p q$
where $p \ge 0$ and $q \ge 0$.
We have that $\alpha \beta = 0^*$.
Aiming for a contradiction, suppose $r = p q$ where $p \ge 0$ and $q \ge 0$.
Then $r \ge 0$.
But then $r \notin 0^*$ by definition of $0^*$.
Thus there is no $p \in \alpha, q \in \beta$ such that $r = p q$ where $p \ge 0$ and $q \ge 0$.
It follows that $\alpha > 0^*$ and $\beta > 0^*$ cannot both be satisfied.
It follows further that for $\size \alpha \, \size \beta = 0^*$ it is not possible for $\size \alpha > 0^*$ and $\size \beta > 0^*$.
The result follows.
$\blacksquare$


Sources
1964: Walter Rudin: Principles of Mathematical Analysis (2nd ed.) ... (previous) ... (next): Chapter $1$: The Real and Complex Number Systems: Dedekind Cuts: $1.26$. Theorem $\text {(e)}$




