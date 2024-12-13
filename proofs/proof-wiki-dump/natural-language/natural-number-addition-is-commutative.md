# 

Source: https://proofwiki.org/wiki/Natural_Number_Addition_is_Commutative



Theorem
The operation of addition on the set of natural numbers $\N$ is commutative:

$\forall m, n \in \N: m + n = n + m$


Proof 1
Consider the natural numbers defined as a naturally ordered semigroup.

By definition, the operation in a naturally ordered semigroup is commutative.
Hence the result.
$\blacksquare$


Proof 2
Proof by induction.
Consider the natural numbers $\N$ defined as the elements of the minimally inductive st $\omega$.

From the definition of addition in $\omega$‎, we have that:










\(\ds \forall m, n \in \N: \, \)



\(\ds m + 0\)

\(=\)







\(\ds m\)




















\(\ds m + n^+\)

\(=\)







\(\ds \paren {m + n}^+\)










For all $n \in \N$, let $\map P n$ be the proposition:

$\forall m \in \N: m + n = n + m$


Basis for the Induction
From Natural Number Addition Commutes with Zero, we have:

$\forall m \in \N: m + 0 = m = 0 + m$
Thus $\map P 0$ is seen to be true.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 0$, then it logically follows that $\map P {k^+}$ is true.

So this is our induction hypothesis $\map P k$:

$\forall m \in \N: m + k = k + m$

Then we need to show that $\map P {k^+}$ follows directly from $\map P k$:

$\forall m \in \N: m + k^+ = k^+ + m$


Induction Step
This is our induction step:















\(\ds k^+ + m\)

\(=\)







\(\ds \paren {k + m}^+\)





Natural Number Addition Commutativity with Successor














\(\ds \)

\(=\)







\(\ds \paren {m + k}^+\)





from the induction hypothesis














\(\ds \)

\(=\)







\(\ds m + k^+\)





by definition



So $\map P k \implies \map P {k^+}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall m, n \in \N: m + n = n + m$
$\blacksquare$


Proof 3
In the axiomatisation of $1$-based natural numbers, this is rendered:

$\forall x, y \in \N_{> 0}: x + y = y + x$

Using the following axioms:




\((\text A)\)  

$:$  





  \(\ds \exists_1 1 \in \N_{> 0}:\)

\(\ds a \times 1 = a = 1 \times a \)   







  


\((\text B)\)  

$:$  





  \(\ds \forall a, b \in \N_{> 0}:\)

\(\ds a \times \paren {b + 1} = \paren {a \times b} + a \)   







  


\((\text C)\)  

$:$  





  \(\ds \forall a, b \in \N_{> 0}:\)

\(\ds a + \paren {b + 1} = \paren {a + b} + 1 \)   







  


\((\text D)\)  

$:$  





  \(\ds \forall a \in \N_{> 0}, a \ne 1:\)

\(\ds \exists_1 b \in \N_{> 0}: a = b + 1 \)   







  


\((\text E)\)  

$:$  





  \(\ds \forall a, b \in \N_{> 0}:\)

\(\ds \)Exactly one of these three holds:\( \)   







  












\(\ds a = b \lor \paren {\exists x \in \N_{> 0}: a + x = b} \lor \paren {\exists y \in \N_{> 0}: a = b + y} \)   







  


\((\text F)\)  

$:$  





  \(\ds \forall A \subseteq \N_{> 0}:\)

\(\ds \paren {1 \in A \land \paren {z \in A \implies z + 1 \in A} } \implies A = \N_{> 0} \)   







  


Let $x \in \N_{> 0}$ be arbitrary.
For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

$x + n = n + x$


Basis for the Induction
From Natural Number Commutes with 1 under Addition, we have that:

$\forall x \in \N_{> 0}: x + 1 = 1 + x$
and so $\map P 1$ holds.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$x + k = k + x$

Then we need to show:

$x + \paren {k + 1} = \paren {k + 1} + x$


Induction Step
This is our induction step:














\(\ds x + \paren {k + 1}\)

\(=\)







\(\ds \paren {x + k} + 1\)





Natural Number Addition is Associative














\(\ds \)

\(=\)







\(\ds \paren {k + x} + 1\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds k + \paren {x + 1}\)





Natural Number Addition is Associative














\(\ds \)

\(=\)







\(\ds k + \paren {1 + x}\)





Basis for the Induction














\(\ds \)

\(=\)







\(\ds \paren {k + 1} + x\)





Natural Number Addition is Associative



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.
$\blacksquare$


Sources
1937: Richard Courant: Differential and Integral Calculus: Volume $\text { I }$ (2nd ed.) ... (previous) ... (next): Chapter $\text I$: Introduction: $1$. The Continuum of Numbers (footnote ${}^*$)
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 4$: The natural numbers: $\text{A} 2$
1972: A.G. Howson: A Handbook of Terms used in Algebra and Analysis ... (previous) ... (next): $\S 4$: Number systems $\text{I}$: Peano's Axioms
1982: Alan G. Hamilton: Numbers, Sets and Axioms ... (previous) ... (next): $\S 1$: Numbers: $1.1$ Natural Numbers and Integers: Examples $1.1 \ \text {(a)}$




