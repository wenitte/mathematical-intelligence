# 

Source: https://proofwiki.org/wiki/Product_of_Integral_Multiples/Proof_1



Theorem
Let $\struct {F, +, \times}$ be a field.
Let $a, b \in F$ and $m, n \in \Z$.

Then:

$\paren {m \cdot a} \times \paren {n \cdot b} = \paren {m n} \cdot \paren {a \times b}$
where $m \cdot a$ is as defined in Integral Multiple.


Proof
Let the zero of $F$ be $0_F$.


Base Result
First we need to show that:

$\paren {m \cdot a} \times b = m \cdot \paren {a \times b}$
This will be done by induction:
For all $m \in \N$, let $\map P n$ be the proposition:

$\paren {m \cdot a} \times b = m \cdot \paren {a \times b}$

First we verify $\map P 0$.
When $m = 0$, we have:














\(\ds \paren {0 \cdot a} \times b\)

\(=\)







\(\ds 0_F \times b\)





Definition of Integral Multiple: $\forall x \in F: 0 \cdot x = 0_F$














\(\ds \)

\(=\)







\(\ds 0_F\)





Definition of Field Zero














\(\ds \)

\(=\)







\(\ds 0 \cdot \paren {a \times b}\)





Definition of Integral Multiple: $\forall x \in F: 0 \cdot x = 0_F$




So $\map P 0$ holds.


Basis for the Induction
Now we verify $\map P 1$:














\(\ds \paren {1 \cdot a} \times b\)

\(=\)







\(\ds a \times b\)





Definition of Integral Multiple: $\forall x \in F: 1 \cdot x = x$














\(\ds \)

\(=\)







\(\ds 1 \cdot \paren {a \times b}\)





Definition of Integral Multiple: $\forall x \in F: 1 \cdot x = x$




So $\map P 1$ holds.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\paren {k \cdot a} \times b = k \cdot \paren {a \times b}$

Then we need to show:

$\paren {\paren {k + 1} \cdot a} \times b = \paren {k + 1} \cdot \paren {a \times b}$


Induction Step
This is our induction step:














\(\ds \paren {\paren {k + 1} \cdot a} \times b\)

\(=\)







\(\ds \paren {a + \paren {k \cdot a} } \times b\)





Definition of Integral Multiple














\(\ds \)

\(=\)







\(\ds a \times b + \paren {k \cdot a} \times b\)





Field Axiom $\text D$: Distributivity of Product over Addition














\(\ds \)

\(=\)







\(\ds a \times b + k \cdot \paren {a \times b}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {k + 1} \cdot \paren {a \times b}\)





Definition of Integral Multiple




So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall m \in \N: \paren {m \cdot a} \times b = m \cdot \paren {a \times b}$
$\Box$

The result for $m < 0$ follows directly from Powers of Group Elements.
$\blacksquare$


Full Result
Proof by induction:
For all $n \in \N$, let $\map P n$ be the proposition:

$\forall m \in \Z: \paren {m \cdot a} \times \paren {n \cdot b} = \paren {m n} \cdot \paren {a \times b}$

First we verify $\map P 0$.
When $n = 0$, we have:














\(\ds \paren {m \cdot a} \times \paren {0 \cdot b}\)

\(=\)







\(\ds \paren {m \cdot a} \times 0_F\)





Definition of Integral Multiple: $\forall x \in F: 0 \cdot x = 0_F$














\(\ds \)

\(=\)







\(\ds 0_F\)





Definition of Field Zero














\(\ds \)

\(=\)







\(\ds 0 \cdot \paren {a \times b}\)





Definition of Integral Multiple: $\forall x \in F: 0 \cdot x = 0_F$














\(\ds \)

\(=\)







\(\ds \paren {m 0} \cdot \paren {a \times b}\)










So $\map P 0$ holds.


Full Result - Basis for the Induction
Next we verify $\map P 1$.
When $n = 1$, we have:














\(\ds \paren {m \cdot a} \times \paren {1 \cdot b}\)

\(=\)







\(\ds \paren {m \cdot a} \times b\)





Definition of Integral Multiple: $\forall x \in F: 1 \cdot x = x$














\(\ds \)

\(=\)







\(\ds m \cdot \paren {a \times b}\)





Base Result














\(\ds \)

\(=\)







\(\ds \paren {m 1} \cdot \paren {a \times b}\)










So $\map P 1$ holds.
This is our basis for the induction.


Full Result - Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\paren {m \cdot a} \times \paren {k \cdot b} = \paren {m k} \cdot \paren {a \times b}$

Then we need to show:

$\paren {m \cdot a} \times \paren {\paren {k + 1} \cdot b} = \paren {m \paren {k + 1} } \cdot \paren {a \times b}$


Full Result - Induction Step
This is our induction step:














\(\ds \paren {m \cdot a} \times \paren {\paren {k + 1} \cdot b}\)

\(=\)







\(\ds \paren {m \cdot a} \times \paren {k \cdot b + b}\)





Definition of Integral Multiple














\(\ds \)

\(=\)







\(\ds \paren {m \cdot a} \times \paren {k \cdot b} + \paren {m \cdot a} \times b\)





Field Axiom $\text D$: Distributivity of Product over Addition














\(\ds \)

\(=\)







\(\ds \paren {m k} \cdot \paren {a \times b} + m \cdot \paren {a \times b}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {m k + k} \cdot \paren {a \times b}\)





Integral Multiple Distributes over Ring Addition














\(\ds \)

\(=\)







\(\ds \paren {m \paren {k + 1} } \cdot \paren {a \times b}\)










So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall m \in \Z: \forall n \in \N: \paren {m \cdot a} \times \paren {n \cdot b} = \paren {m n} \cdot \paren {a \times b}$
$\Box$

The result for $n < 0$ follows directly from Powers of Group Elements.
$\blacksquare$





