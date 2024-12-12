# 

Source: https://proofwiki.org/wiki/Exponential_of_Sum/Real_Numbers/Proof_6

Theorem
Let $x, y \in \R$ be real numbers.
Let $\exp x$ be the exponential of $x$.

Then:

$\map \exp {x + y} = \paren {\exp x} \paren {\exp y}$


Proof
Fix $a \in \R$ and define the function $f_a : \R \to \R$ by: 

$\map {f_a} x = \map \exp {a - x} \exp x$
for all $x \in \R$.
We aim to establish that: 

$\map {f_a} x = \map \exp {a - x} \exp x = \exp a$
for all $a, x \in \R$. 
Then, we can fix $x, y \in \R$ and set $a = x + y$ to obtain: 

$\map {f_a} x = \exp y \exp x = \map \exp {x + y}$
which is the claim.
Note that $f_a$ is differentiable and we have: 














\(\ds \map {f_a'} x\)

\(=\)







\(\ds \map {\frac \d {\d x} } {\map \exp {a - x} } \exp x + \map {\frac \d {\d x} } {\exp x} \map \exp {a - x}\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds -\map \exp {a - x} \exp x + \exp x \map \exp {a - x}\)





Chain Rule for Derivatives, Derivative of Exponential Function














\(\ds \)

\(=\)







\(\ds 0\)









From Zero Derivative implies Constant Function, $f_a$ is constant.
That is, there exists $C \in \R$ such that: 

$\map {f_a} x = C$
for all $x \in \R$.
We have: 














\(\ds \map {f_a} a\)

\(=\)







\(\ds \map \exp {a - a} \exp a\)




















\(\ds \)

\(=\)







\(\ds \exp 0 \exp a\)




















\(\ds \)

\(=\)







\(\ds \exp a\)





Exponential of Zero



So: 

$\map {f_a} x = \exp a$
for all $a, x \in \R$. 
That is: 

$\map \exp {a - x} \map \exp x = \exp a$
for all $a, x \in \R$. 
Hence the result.
$\blacksquare$





