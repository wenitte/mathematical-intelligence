# 

Source: https://proofwiki.org/wiki/Properties_of_Limit_at_Infinity_of_Real_Function/Multiple_Rule

Theorem
Let $a, \alpha \in \R$. 
Let $f : \hointr a \infty \to \R$ be a real function such that: 

$\ds \lim_{x \mathop \to \infty} \map f x = L$
where $\ds \lim_{x \mathop \to \infty}$ denotes the limit at $+\infty$.

Then: 

$\ds \lim_{x \mathop \to \infty} \paren {\alpha \map f x}$ exists
with:

$\ds \lim_{x \mathop \to \infty} \paren {\alpha \map f x} = \alpha L$


Proof
If $\alpha = 0$, the result follows from Limit of Constant Function: Limit at $\infty$.
Otherwise, since: 

$\ds \lim_{x \mathop \to \infty} \map f x = L$
given $\epsilon > 0$ we can find a real number $M \ge 0$ such that: 

$\ds \size {\map f x - L} < \frac \epsilon {\size \alpha}$ for $x \ge M$.
Then: 

$\ds \size {\alpha \map f x - \alpha L} < \epsilon$ for $x \ge M$.
Since $\epsilon$ was arbitrary, we have:

$\ds \lim_{x \mathop \to \infty} \paren {\alpha \map f x}$ exists
with:

$\ds \lim_{x \mathop \to \infty} \paren {\alpha \map f x} = \alpha L$
$\blacksquare$





