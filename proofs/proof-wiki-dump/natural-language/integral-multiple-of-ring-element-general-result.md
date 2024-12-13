# 

Source: https://proofwiki.org/wiki/Integral_Multiple_of_Ring_Element/General_Result



Theorem
Let $\struct {R, +, \circ}$ be a ring whose zero is $0_R$.
Let $n \cdot x$ be an integral multiple of $x$:

$n \cdot x = \begin {cases}
0_R & : n = 0 \\
x & : n = 1 \\
\paren {n - 1} \cdot x + x & : n > 1
\end {cases}$
that is:

$n \cdot x = x + x + \cdots \paren n \cdots x$
For $n < 0$ we use $-n \cdot x = n \cdot \paren {-x}$.

Then:

$\forall m, n \in \Z: \forall x \in R: \paren {m \cdot x} \circ \paren {n \cdot x} = \paren {m n} \cdot \paren {x \circ x}$.


Proof
Proof by induction:
For all $n \in \N$, let $\map P n$ be the proposition:

$\paren {m \cdot x} \circ \paren {n \cdot x} = \paren {m n} \cdot \paren {x \circ x}$

In what follows, we make extensive use of Integral Multiple of Ring Element:

$\forall n \in \Z: \forall x \in R: \paren {m \cdot x} \circ x = m \cdot \paren {x \circ x} = x \circ \paren {m \cdot x}$

First we verify $\map P 0$.
When $n = 0$, we have:














\(\ds \paren {m \cdot x} \circ \paren {0 \cdot x}\)

\(=\)







\(\ds \paren {m \cdot x} \circ 0_R\)




















\(\ds \)

\(=\)







\(\ds 0_R\)




















\(\ds \)

\(=\)







\(\ds 0 \cdot \paren {x \circ x}\)




















\(\ds \)

\(=\)







\(\ds \paren {m 0} \cdot \paren {x \circ x}\)










So $\map P 0$ holds.


Basis for the Induction
Next we verify $\map P 1$.
When $n = 1$, we have:














\(\ds \paren {m \cdot x} \circ \paren {1 \cdot x}\)

\(=\)







\(\ds \paren {m \cdot x} \circ x\)




















\(\ds \)

\(=\)







\(\ds m \cdot \paren {x \circ x}\)




















\(\ds \)

\(=\)







\(\ds \paren {m 1} \cdot \paren {x \circ x}\)










So $\map P 1$ holds.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\paren {m \cdot x} \circ \paren {k \cdot x} = \paren {m k} \cdot \paren {x \circ x}$

Then we need to show:

$\paren {m \cdot x} \circ \paren {\paren {k + 1} \cdot x} = \paren {m \paren {k + 1} } \cdot \paren {x \circ x}$


Induction Step
This is our induction step:














\(\ds \paren {m \cdot x} \circ \paren {\paren {k + 1} \cdot x}\)

\(=\)







\(\ds \paren {m \cdot x} \circ \paren {k \cdot x + x}\)




















\(\ds \)

\(=\)







\(\ds \paren {m \cdot x} \circ \paren {k \cdot x} + \paren {m \cdot x} \circ x\)





Ring Axiom $\text D$: Distributivity of Product over Addition














\(\ds \)

\(=\)







\(\ds \paren {m k} \cdot \paren {x \circ x} + m \cdot \paren {x \circ x}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {m k + k} \cdot \paren {x \circ x}\)





Ring Axiom $\text D$: Distributivity of Product over Addition














\(\ds \)

\(=\)







\(\ds \paren {m \paren {k + 1} } \cdot \paren {x \circ x}\)










So $\map P K \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall m \in \Z: \forall n \in \N: \paren {m \cdot x} \circ \paren {n \cdot x} = \paren {m n} \cdot \paren {x \circ x}$
$\Box$

The result for $n < 0$ follows directly from Powers of Group Elements.
$\blacksquare$





