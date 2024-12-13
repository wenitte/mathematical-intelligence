# 

Source: https://proofwiki.org/wiki/Properties_of_Limit_at_Infinity_of_Real_Function/Sum_Rule

Theorem
Let $a \in \R$. 
Let $f, g : \hointr a \infty \to \R$ be real functions such that: 

$\ds \lim_{x \mathop \to \infty} \map f x = L_1$
and:

$\ds \lim_{x \mathop \to \infty} \map g x = L_2$
where $\ds \lim_{x \mathop \to \infty}$ denotes the limit at $+\infty$.

Then: 

$\ds \lim_{x \mathop \to \infty} \paren {\map f x + \map g x}$ exists
with:

$\ds \lim_{x \mathop \to \infty} \paren {\map f x + \map g x} = L_1 + L_2$


Proof
Since: 

$\ds \lim_{x \mathop \to \infty} \map f x = L_1$
given $\epsilon > 0$, we can find $M_1 \ge 0$ such that: 

$\ds \size {\map f x - L_1} < \frac \epsilon 2$ for $x \ge M_1$
Since: 

$\ds \lim_{x \mathop \to \infty} \map g x = L_2$
we can find $M_2 \ge 0$ such that: 

$\ds \size {\map f x - L_2} < \frac \epsilon 2$ for $x \ge M_2$.
Let:

$M = \max \set {M_1, M_2}$
Then, for $x \ge M$, we have: 














\(\ds \size {\paren {\map f x + \map g x} - \paren {L_1 + L_2} }\)

\(=\)







\(\ds \size {\paren {\map f x - L_1} + \paren {\map g x - L_2} }\)




















\(\ds \)

\(\le\)







\(\ds \size {\map f x - L_1} + \size {\map g x - L_2}\)





Triangle Inequality for Real Numbers














\(\ds \)

\(<\)







\(\ds \frac \epsilon 2 + \frac \epsilon 2\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









Since $\epsilon$ was arbitrary, we have:

$\ds \lim_{x \mathop \to \infty} \paren {\map f x + \map g x} = L_1 + L_2$
$\blacksquare$





