# 

Source: https://proofwiki.org/wiki/Linear_Function_is_Continuous/Proof_2

Theorem
Let $\alpha, \beta \in \R$ be real numbers.
Let $f : \R \to \R$ be a linear real function:

$\map f x = \alpha x + \beta$
for all $x \in \R$.

Then $f$ is continuous at every real number $c \in \R$.


Proof
Let $c \in \R$. 
Let $\sequence {x_n}$ be a real sequence converging to $c$. 
Then:














\(\ds \lim_{n \mathop \to \infty} \map f {x_n}\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {\alpha x_n + \beta}\)




















\(\ds \)

\(=\)







\(\ds \alpha c + \beta\)





Combined Sum Rule for Real Sequences














\(\ds \)

\(=\)







\(\ds \map f c\)









We therefore have: 

for all real sequences $\sequence {x_n}$ converging to $c$, the sequence $\sequence {\map f {x_n} }$ converges to $\map f c$.
So by Sequential Continuity is Equivalent to Continuity in the Reals $f$ is continuous at $c$. 
As $c \in \R$ was arbitrary, $f$ is continuous on $\R$.
$\blacksquare$





