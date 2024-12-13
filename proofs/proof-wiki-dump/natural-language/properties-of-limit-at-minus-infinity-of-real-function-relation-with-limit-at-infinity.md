# 

Source: https://proofwiki.org/wiki/Properties_of_Limit_at_Minus_Infinity_of_Real_Function/Relation_with_Limit_at_Infinity

Theorem
Let $a \in \R$. 
Let $f : \hointl {-\infty} a \to \R$ be a real function.

Then:

$\ds \lim_{x \mathop \to -\infty} \map f x$ exists if and only if $\ds \lim_{x \mathop \to \infty} \map f {-x}$ exists
and in this case:

$\ds \lim_{x \mathop \to -\infty} \map f x = \lim_{x \mathop \to \infty} \map f {-x}$
where:

$\ds \lim_{x \mathop \to \infty}$ denotes the limit at $+\infty$
$\ds \lim_{x \mathop \to -\infty}$ denotes the limit at $-\infty$.


Proof
Note that: 

$\ds \lim_{x \mathop \to -\infty} \map f x = L$
if and only if given $\epsilon > 0$ we can find real number $M \le 0$ such that: 

$\size {\map f x - L} < \epsilon$ for $x \le M$.
This is equivalent to: 

given $\epsilon > 0$ we can find real number $M \le 0$ such that $\size {\map f x - L} < \epsilon$ for $x \ge -M$.
Since $\epsilon$ was arbitrary and $-M \ge 0$, we have:

$\ds \lim_{x \mathop \to -\infty} \map f x$ exists if and only if $\ds \lim_{x \mathop \to \infty} \map f {-x}$ exists
with: 

$\ds \lim_{x \mathop \to \infty} \map f x = L = \lim_{x \mathop -\infty} \map f {-x}$
which was the demand.
$\blacksquare$





