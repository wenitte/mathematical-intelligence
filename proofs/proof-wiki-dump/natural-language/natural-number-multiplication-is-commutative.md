# 

Source: https://proofwiki.org/wiki/Natural_Number_Multiplication_is_Commutative



Theorem
The operation of multiplication on the set of natural numbers $\N$ is commutative:

$\forall x, y \in \N: x \times y = y \times x$

In the words of Euclid:

If two numbers by multiplying one another make certain numbers, the numbers so produced will be equal to one another.
(The Elements: Book $\text{VII}$: Proposition $16$)


Proof 1
Natural number multiplication is recursively defined as:

$\forall m, n \in \N: \begin{cases} m \times 0 & = 0 \\ m \times \paren {n + 1} & = m \times n + m \end{cases}$
From the Principle of Recursive Definition, there is only one mapping $f$ satisfying this definition; that is, such that:

$\forall n \in \N: \begin{cases} \map f 0 = 0 \\ \map f {n + 1} = \map f n + m \end{cases}$
Consider now $f'$ defined as $\map {f'} n = n \times m$.
Then by Zero is Zero Element for Natural Number Multiplication:

$\map {f'} 0 = 0 \times m = 0$
Furthermore:














\(\ds \map {f'} {n + 1}\)

\(=\)







\(\ds \paren {n + 1} \times m\)




















\(\ds \)

\(=\)







\(\ds n \times m + m\)





Natural Number Multiplication Distributes over Addition














\(\ds \)

\(=\)







\(\ds \map {f'} n + m\)









showing that $f'$ also satisfies the definition of $m \times n$.
By the Principle of Recursive Definition it follows that:

$m \times n = n \times m$
$\blacksquare$


Proof 2
Proof by induction:

From the definition of natural number multiplication, we have that:










\(\ds \forall m, n \in \N: \, \)



\(\ds m \times 0\)

\(=\)







\(\ds 0\)




















\(\ds m \times n^+\)

\(=\)







\(\ds \paren {m \times n} + m\)










For all $n \in \N$, let $\map P n$ be the proposition:

$\forall m \in \N: m \times n = n \times m$


Basis for the Induction
From Zero is Zero Element for Natural Number Multiplication:

$\forall m \in \N: m \times 0 = 0 = 0 \times m$
Thus $\map P 0$ is seen to be true.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 0$, then it logically follows that $\map P {k^+}$ is true.

So this is our induction hypothesis $\map P k$:

$\forall m \in \N: m \times k = k \times m$

Then we need to show that $\map P {k^+}$ follows from $\map P k$:

$\forall m \in \N: m \times k^+ = k^+ \times m$


Induction Step
This is our induction step:















\(\ds m \times k^+\)

\(=\)







\(\ds \paren {m \times k} + m\)





Definition of Natural Number Multiplication














\(\ds \)

\(=\)







\(\ds m + \paren {m \times k}\)





Natural Number Addition is Commutative














\(\ds \)

\(=\)







\(\ds m + \paren {k \times m}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds k^+ \times m\)





Natural Number Multiplication Distributes over Addition



So $\map P k \implies \map P {k^+}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall m, n \in \N: m \times n = n \times m$
$\blacksquare$


Proof 3
In the Axiomatization of 1-Based Natural Numbers, this is rendered:

$\forall x, y \in \N_{> 0}: x \times y = y \times x$

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







  


For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

$\forall a \in \N_{> 0}: a \times n = n \times a$


Basis for the Induction
$\map P 1$ is the case:














\(\ds a \times 1\)

\(=\)







\(\ds a\)





Axiom $\text A$














\(\ds \)

\(=\)







\(\ds 1 \times a\)





Axiom $\text A$



and so $\map P 1$ holds.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 0$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\forall a \in \N: a \times k = k \times a$

Then we need to show:

$\forall a \in \N: a \times \paren {k + 1} = \paren {k + 1} \times a$


Induction Step
This is our induction step:














\(\ds a \times \paren {k + 1}\)

\(=\)







\(\ds \paren {a \times k} + \paren {a \times 1}\)





Left Distributive Law for Natural Numbers














\(\ds \)

\(=\)







\(\ds \paren {k \times a} + \paren {a \times 1}\)





Induction hypothesis














\(\ds \)

\(=\)







\(\ds \paren {k \times a} + \paren {1 \times a}\)





Basis for the Induction














\(\ds \)

\(=\)







\(\ds \paren {k + 1} \times a\)





Right Distributive Law for Natural Numbers



The result follows by the Principle of Mathematical Induction.
$\blacksquare$


Euclid's Proof
Let $A, B$ be two (natural) numbers, and let $A$ by multiplying $B$ make $C$, and $B$ by multiplying $A$ make $D$.
We need to show that $C = D$.


We have that $A \times B = C$.
So $B$ measures $C$ according to the units of $A$.
But the unit $E$ also measures $A$ according to the units in it.
So $E$ measures $A$ the same number of times that $B$ measures $C$.
Therefore from Proposition $15$ of Book $\text{VII} $: Alternate Ratios of Multiples‎ $E$ measures $B$ the same number of times that $A$ measures $C$.
We also have that $A$ measures $D$ according to the units of $B$ since $B \times A = D$.
But the unit $E$ also measures $B$ according to the units in it.
Therefore $E$ measures $B$ the same number of times that $A$ measures $D$.
But we also have that $E$ measures $B$ the same number of times that $A$ measures $C$.
So $A$ measures $C$ and $D$ the same number of times.
Therefore $C = D$.
$\blacksquare$


Sources
1937: Richard Courant: Differential and Integral Calculus: Volume $\text { I }$ (2nd ed.) ... (previous) ... (next): Chapter $\text I$: Introduction: $1$. The Continuum of Numbers (footnote ${}^*$)
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 4$: The natural numbers: $\text{M} 2$
1972: A.G. Howson: A Handbook of Terms used in Algebra and Analysis ... (previous) ... (next): $\S 4$: Number systems $\text{I}$: Peano's Axioms
1982: Alan G. Hamilton: Numbers, Sets and Axioms ... (previous) ... (next): $\S 1$: Numbers: $1.1$ Natural Numbers and Integers: Examples $1.1 \ \text {(f)}$




