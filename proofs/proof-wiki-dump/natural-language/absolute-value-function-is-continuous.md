# 

Source: https://proofwiki.org/wiki/Absolute_Value_Function_is_Continuous

Theorem
Let $f$ be the real function defined as:

$\forall x \in \R: \map f x = \size x$
where $\size x$ denotes the absolute value of $x$.

Then $f$ is a continuous real function.


Proof
Let $a \in \R$.
Let $\epsilon \in \R_{\mathop > 0}$.

Let $\delta \le \epsilon$
We have:










\(\ds \forall x \in \R : \size{x - a} < \delta: \, \)



\(\ds \size{\map f x - \map f a}\)

\(=\)







\(\ds \bigsize {\size x - \size a}\)





Definition of $f$














\(\ds \)

\(\le\)







\(\ds \size {x - a}\)





Reverse Triangle Inequality on Real Numbers














\(\ds \)

\(<\)







\(\ds \delta\)




















\(\ds \)

\(\le\)







\(\ds \epsilon\)










Since $\epsilon$ was arbitrary, it follows that $f$ is continuous at $a$ by definition.

Since $a$ was arbitrary, it follows that $f$ is continuous everywhere by definition.
$\blacksquare$





