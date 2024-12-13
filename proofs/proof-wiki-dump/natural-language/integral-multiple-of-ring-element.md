# 

Source: https://proofwiki.org/wiki/Integral_Multiple_of_Ring_Element



Theorem
Let $\struct {R, +, \circ}$ be a ring whose zero is $0_R$.
Let $n \cdot x$ be an integral multiple of $x$:

$n \cdot x = \begin {cases}
0_R & : n = 0 \\
x & : n = 1 \\
\paren {n - 1} \cdot x + x & : n > 1
\end {cases}$
that is:

$n \cdot x = \underbrace {x + x + \cdots + x}_{\text {$n$ times} }$
For $n < 0$ we use:

$n \cdot x = \paren{-n} \cdot \paren {-x}$

Then:

$\forall n \in \Z: \forall x \in R: \paren {n \cdot x} \circ x = n \cdot \paren {x \circ x} = x \circ \paren {n \cdot x}$


General Result
$\forall m, n \in \Z: \forall x \in R: \paren {m \cdot x} \circ \paren {n \cdot x} = \paren {m n} \cdot \paren {x \circ x}$.


Proof
Proof by induction:
For all $n \in \N$, let $\map P n$ be the proposition:

$\paren {n \cdot x} \circ x = n \cdot \paren {x \circ x} = x \circ \paren {n \cdot x}$

First we verify $\map P 0$.
When $n = 0$, we have:














\(\ds \paren {0 \cdot x} \circ x\)

\(=\)







\(\ds 0_R \circ x\)




















\(\ds \)

\(=\)







\(\ds 0_R\)




















\(\ds \)

\(=\)







\(\ds 0 \cdot \paren {x \circ x}\)




















\(\ds \)

\(=\)







\(\ds x \circ 0_R\)




















\(\ds \)

\(=\)







\(\ds x \circ \paren {0 \cdot x}\)










So $\map P 0$ holds.


Basis for the Induction
Now we verify $\map P 1$:














\(\ds \paren {1 \cdot x} \circ x\)

\(=\)







\(\ds x \circ x\)




















\(\ds \)

\(=\)







\(\ds 1 \cdot \paren {x \circ x}\)




















\(\ds \)

\(=\)







\(\ds x \circ \paren {1 \cdot x}\)










So $\map P 1$ holds.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\paren {k \cdot x} \circ x = k \cdot \paren {x \circ x} = x \circ \paren {k \cdot x}$

Then we need to show:

$\paren {\paren {k + 1} \cdot x} \circ x = \paren {k + 1} \cdot \paren {x \circ x} = x \circ \paren {\paren {k + 1} \cdot x}$


Induction Step
This is our induction step:














\(\ds \paren {\paren {k + 1} \cdot x} \circ x\)

\(=\)







\(\ds \paren {x + \paren {k \cdot x} } \circ x\)




















\(\ds \)

\(=\)







\(\ds x \circ x + \paren {k \cdot x} \circ x\)





Ring Axiom $\text D$: Distributivity of Product over Addition














\(\ds \)

\(=\)







\(\ds x \circ x + k \cdot \paren {x \circ x}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {k + 1} \cdot \paren {x \circ x}\)










A similar construction shows that $\paren {k + 1} \cdot \paren {x \circ x} = x \circ \paren {\paren {k + 1} \cdot x}$.

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \N: \paren {n \cdot x} \circ x = n \cdot \paren {x \circ x} = x \circ \paren {n \cdot x}$
$\Box$

The result for $n < 0$ follows directly from Powers of Group Elements.
$\blacksquare$





