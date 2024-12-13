# 

Source: https://proofwiki.org/wiki/Natural_Number_Addition_Commutativity_with_Successor/Proof_2



Theorem
Let $\N$ be the natural numbers.
Then:

$\forall m, n \in \N_{> 0}: \left({m + 1}\right) + n = \left({m + n}\right) + 1$


Proof
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







  


Proof by induction:

From Axiomatization of $1$-Based Natural Numbers, we have by definition that:










\(\ds \forall m, n \in \N: \, \)



\(\ds m + 0\)

\(=\)







\(\ds m\)




















\(\ds \paren {m + n}^+\)

\(=\)







\(\ds m + n^+\)










For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

$\forall m \in \N_{> 0}: \paren {m + 1} + n = \paren {m + n} + 1$


Basis for the Induction
When $n = 1$, we have:

$\paren {m + 1} + 1 = \paren {m + 1} + 1$
which holds trivially.
Thus $\map P 1$ is seen to be true.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis $\map P k$:

$\forall m \in \N: \paren {m + 1} + k = \paren {m + k} + 1$

Then we need to show that $\map P {k^+}$ follows directly from $\map P k$:

$\forall m \in \N: \paren {m + 1} + \paren {k + 1} = \paren {m + \paren {k + 1} } + 1$


Induction Step
This is our induction step:















\(\ds \paren {m + \paren {k + 1} } + 1\)

\(=\)







\(\ds \paren {\paren {m + k} + 1} + 1\)





Natural Number Addition is Associative/Proof 3














\(\ds \)

\(=\)







\(\ds \paren {\paren {m + 1} + k} + 1\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {m + 1} + \paren {k + 1}\)





Natural Number Addition is Associative/Proof 3



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall m, n \in \N_{> 0}: \paren {m + 1} + n = \paren {m + n} + 1$
$\blacksquare$





