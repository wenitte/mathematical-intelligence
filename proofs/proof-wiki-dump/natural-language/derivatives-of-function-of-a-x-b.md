# 

Source: https://proofwiki.org/wiki/Derivatives_of_Function_of_a_x_%2B_b



Theorem
Let $f$ be a real function which is differentiable on $\R$.
Let $a, b \in \R$ be constants.

Then:

$\map {\dfrac {\d^n} {\d x^n} } {\map f {a x + b} } = a^n \map {\dfrac {\d^n} {\d z^n} } {\map f z}$
where $z = a x + b$.


Proof
Proof by induction:
For all $n \in \N_{>0}$, let $\map P n$ be the proposition:

$\map {\dfrac {\d^n} {\d x^n} } {\map f {a x + b} } = a^n \map {\dfrac {\d^n} {\d z^n} } {\map f z}$
where $z = a x + b$.


Basis for the Induction
$P(1)$ is the case:.

$\map {\dfrac \d {\d x} } {\map f {a x + b} } = a \map {\dfrac \d {\d z} } {\map f z}$
where $z = a x + b$.
This is proved in Derivative of Function of Constant Multiple: Corollary.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\map {\dfrac {\d^k} {\d x^k} } {\map f {a x + b} } = a^k \map {\dfrac {\d^n} {\d z^k} } {\map f z}$
where $z = a x + b$.

Then we need to show:

$\map {\dfrac {\d^{k + 1} } {\d x^{k + 1} } } {\map f {a x + b} } = a^{k + 1} \map {\dfrac {\d^{k + 1} } {\d z^{k + 1} } } {\map f z}$
where $z = a x + b$.


Induction Step
This is our induction step:














\(\ds \map {\dfrac {\d^{k + 1} } {\d x^{k + 1} } } {\map f {a x + b} }\)

\(=\)







\(\ds \map {\dfrac \d {\d x} } {\map {\dfrac {\d^k} {\d x^k} } {\map f {a x + b} } }\)





Definition of Higher Derivative














\(\ds \)

\(=\)







\(\ds \map {\dfrac \d {\d x} } {a^k \map {\dfrac {\d^k} {\d z^k} } {\map f z} }\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds a^k \map {\dfrac \d {\d x} } {\map {\dfrac {\d^k} {\d z^k} } {\map f z} }\)





Derivative of Constant Multiple














\(\ds \)

\(=\)







\(\ds a^k \cdot a \map {\dfrac \d {\d z} } {\map {\dfrac {\d^k} {\d z^k} } {\map f z} }\)





Basis of the Induction














\(\ds \)

\(=\)







\(\ds a^{k + 1} \map {\dfrac \d {\d z} } {\map {\dfrac {\d^k} {\d z^k} } {\map f z} }\)









So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\map {\dfrac {\d^n} {\d x^n} } {\map f {a x + b} } = a^n \map {\dfrac {\d^n} {\d z^n} } {\map f z}$
where $z = a x + b$.
$\blacksquare$





