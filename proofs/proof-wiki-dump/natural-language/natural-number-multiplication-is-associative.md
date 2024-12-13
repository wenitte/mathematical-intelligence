# 

Source: https://proofwiki.org/wiki/Natural_Number_Multiplication_is_Associative



Theorem
The operation of multiplication on the set of natural numbers $\N$ is associative:

$\forall x, y, z \in \N: \paren {x \times y} \times z = x \times \paren {y \times z}$


Proof 1
From Index Laws for Semigroup: Product of Indices we have:

$+^{z \times y} x = \map {+^z} {+^y x}$
By definition of multiplication, this amounts to:

$x \times \paren {z \times y} = \paren {x \times y} \times z$
From Natural Number Multiplication is Commutative, we have:

$x \times \paren {z \times y} = x \times \paren {y \times z}$
$\blacksquare$


Proof 2
We are to show that:

$\paren {x \times y} \times n = x \times \paren {y \times n}$
for all $x, y, n \in \N$.

From the definition of natural number multiplication, we have that:










\(\ds \forall m, n \in \N: \, \)



\(\ds m \times 0\)

\(=\)







\(\ds 0\)




















\(\ds m \times \paren {n + 1}\)

\(=\)







\(\ds \paren {m \times n} + m\)










Let $x, y \in \N$ be arbitrary.
For all $n \in \N$, let $\map P n$ be the proposition:

$\paren {x \times y} \times n = x \times \paren {y \times n}$


Basis for the Induction
$\map P 0$ is the case:














\(\ds \paren {x \times y} \times 0\)

\(=\)







\(\ds 0\)




















\(\ds \)

\(=\)







\(\ds x \times 0\)




















\(\ds \)

\(=\)







\(\ds x \times \paren {y \times 0}\)









and so $\map P 0$ holds.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 0$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\paren {x \times y} \times k = x \times \paren {y \times k}$

Then we need to show:

$\paren {x \times y} \times \paren {k + 1} = x \times \paren {y \times \paren {k + 1} }$


Induction Step
This is our induction step:















\(\ds \paren {x \times y} \times \paren {k + 1}\)

\(=\)







\(\ds \paren {\paren {x \times y} \times k} + \paren {x \times y}\)





Definition of Natural Number Multiplication














\(\ds \)

\(=\)







\(\ds \paren {x \times \paren {y \times k} } + \paren {x \times y}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {x \times y} + \paren {x \times \paren {y \times k} }\)





Natural Number Addition is Commutative














\(\ds \)

\(=\)







\(\ds x \times \paren {y + \paren {y \times k} }\)





Natural Number Multiplication Distributes over Addition














\(\ds \)

\(=\)







\(\ds x \times \paren {\paren {y \times k} + y}\)





Natural Number Addition is Commutative














\(\ds \)

\(=\)







\(\ds x \times \paren {y \times \paren {k + 1} }\)





Definition of Natural Number Multiplication



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.
$\blacksquare$


Proof 3
In the Axiomatization of 1-Based Natural Numbers, this is rendered:

$\forall x, y, z \in \N_{> 0}: \paren {x \times y} \times z = x \times \paren {y \times z}$

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







  


Let $x, y \in \N_{> 0}$ be arbitrary.
For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

$\paren {x \times y} \times n = x \times \paren {y \times n}$


Basis for the Induction
$\map P 1$ is the case:














\(\ds \paren {x \times y} \times 1\)

\(=\)







\(\ds x \times y\)





Axiom $\text A$














\(\ds \)

\(=\)







\(\ds x \times \paren {y \times 1}\)





Axiom $\text A$



and so $\map P 1$ holds.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 0$, then it logically follows that $\map P {k^+}$ is true.

So this is our induction hypothesis:

$\paren {x \times y} \times k = x \times \paren {y \times k}$

Then we need to show:

$\paren {x \times y} \times \paren {k + 1} = x \times \paren {y \times \paren {k + 1} }$


Induction Step
This is our induction step:















\(\ds \paren {x \times y} \times \paren {k + 1}\)

\(=\)







\(\ds \paren {\paren {x \times y} \times k} + \paren {x \times y}\)





Axiom $\text B$














\(\ds \)

\(=\)







\(\ds \paren {x \times \paren {y \times k} } + \paren {x \times y}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {x \times y} + \paren {x \times \paren {y \times k} }\)





Natural Number Addition is Commutative














\(\ds \)

\(=\)







\(\ds x \times \paren {y + \paren {y \times k} }\)





Natural Number Multiplication Distributes over Addition














\(\ds \)

\(=\)







\(\ds x \times \paren {\paren {y \times k} + y}\)





Natural Number Addition is Commutative














\(\ds \)

\(=\)







\(\ds x \times \paren {y \times \paren {k + 1} }\)





Definition of Natural Number Multiplication



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.
$\blacksquare$


Sources
1937: Richard Courant: Differential and Integral Calculus: Volume $\text { I }$ (2nd ed.) ... (previous) ... (next): Chapter $\text I$: Introduction: $1$. The Continuum of Numbers (footnote ${}^*$)
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 4$: The natural numbers: $\text{M} 1$
1972: A.G. Howson: A Handbook of Terms used in Algebra and Analysis ... (previous) ... (next): $\S 4$: Number systems $\text{I}$: Peano's Axioms
1982: Alan G. Hamilton: Numbers, Sets and Axioms ... (previous) ... (next): $\S 1$: Numbers: $1.1$ Natural Numbers and Integers: Examples $1.1 \ \text {(f)}$




