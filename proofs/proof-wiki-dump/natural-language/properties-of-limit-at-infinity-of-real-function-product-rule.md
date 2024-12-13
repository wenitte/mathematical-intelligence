# 

Source: https://proofwiki.org/wiki/Properties_of_Limit_at_Infinity_of_Real_Function/Product_Rule

Theorem
Let $a \in \R$. 
Let $f, g : \hointr a \infty \to \R$ be real functions such that: 

$\ds \lim_{x \mathop \to \infty} \map f x = L_1$
and:

$\ds \lim_{x \mathop \to \infty} \map g x = L_2$
where $\ds \lim_{x \mathop \to \infty}$ denotes the limit at $+\infty$.

Then: 

$\ds \lim_{x \mathop \to \infty} \paren {\map f x \map g x} = L_1 L_2$


Proof
Write: 














\(\ds \size {\map f x \map g x - L_1 L_2}\)

\(=\)







\(\ds \size {\map f x \map g x - L_1 L_2 + L_2 \map f x - L_2 \map f x}\)




















\(\ds \)

\(=\)







\(\ds \size {\map f x \paren {\map g x - L_2} + L_2 \paren {\map f x - L_1} }\)




















\(\ds \)

\(\le\)







\(\ds \size {\map f x} \size {\map g x - L_2} + \size {L_2} \size {\map f x - L_1}\)









Since: 

$\ds \lim_{x \mathop \to \infty} \map f x = L_1$
there exists a real number $M_1 \ge 0$ such that: 

$\size {\map f x - {L_1} } < 1$
for $x \ge M_1$.
By the Reverse Triangle Inequality, we then have: 

$\size {\size {\map f x} - \size {L_1} } < 1$
so that:

$\size {L_1} - 1 < \size {\map f x} < \size {L_1} + 1$
So we have, for $x \ge M_1$: 

$\size {\map f x} \size {\map g x - L_2} + \size {L_2} \size {\map f x - L_1} < \paren {\size {L_1} + 1} \size {\map g x - L_2} + \size {L_2} \size {\map f x - L_1}$
Since: 

$\ds \lim_{x \mathop \to \infty} \map g x = L_2$
given $\epsilon > 0$ we can select a real number $M_2 \ge 0$ such that: 

$\ds \size {\map g x - L_2} < \frac \epsilon {2 \paren {\size {L_1} + 1} }$ for $x \ge M_2$.
If $L_2 = 0$, we are done, since if $x \ge \max \set {M_1, M_2}$, we have: 














\(\ds \size {\map f x \map g x}\)

\(<\)







\(\ds \paren {\size {L_1} + 1} \size {\map g x - L_2}\)




















\(\ds \)

\(<\)







\(\ds \paren {\size {L_1} + 1} \paren {\frac \epsilon {2 \paren {\size {L_1} + 1} } }\)




















\(\ds \)

\(=\)







\(\ds \frac \epsilon 2\)









Then since $\epsilon$ was arbitrary, we then have: 

$\ds \lim_{x \mathop \to \infty} \paren {\map f x \map g x} = 0$
Now suppose that $L_2 \ne 0$. 
Since: 

$\ds \lim_{x \mathop \to \infty} \map f x = L_1$
given $\epsilon > 0$ we can pick a real number $M_3 \ge 0$ such that: 

$\ds \size {\map f x - L_1} < \frac \epsilon {2 \size {L_2} }$
Let:

$M = \max \set {M_1, M_2, M_3}$
Then, for $x \ge M$, we have: 














\(\ds \paren {\size {L_1} + 1} \size {\map g x - L_2} + \size {L_2} \size {\map f x - L_1}\)

\(<\)







\(\ds \paren {\size {L_1} + 1} \paren {\frac \epsilon {2 \paren {\size {L_1} + 1} } } + \size {L_2} \paren {\frac \epsilon {2 \size {L_2} } }\)




















\(\ds \)

\(=\)







\(\ds \frac \epsilon 2 + \frac \epsilon 2\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









$\blacksquare$





