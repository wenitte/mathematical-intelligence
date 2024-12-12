# 

Source: https://proofwiki.org/wiki/Factorial_as_Product_of_Consecutive_Factorials/Lemma_2



Theorem
Let $n \in \N$.
Then $\paren {2 n - 2}! \, \paren {2 n - 1}! > \paren {3 n - 1}!$ for all $n \ge 7$.


Proof
We prove the result by induction on $n$.


Basis for the Induction
The case $n = 7$ is verified by direct calculation:

$12! \times 13! > 20!$
This is the basis for the induction.


Induction Hypothesis
We suppose for some $k \ge 7$, we have:

$\paren {2 k - 2}! \, \paren {2 k - 1}! > \paren {3 k - 1}!$
This is our induction hypothesis.


Induction Step
This is our induction step:














\(\ds \paren {2 k}! \, \paren {2 k + 1}!\)

\(>\)







\(\ds \paren {2 k} \paren {2 k - 1} \paren {2 k + 1} \paren {2 k} \paren {3 k - 1}!\)





Induction Hypothesis














\(\ds \)

\(>\)







\(\ds k \paren {2 k - 1} \paren {2 k + 1} \paren {3 k} \paren {3 k - 1}!\)





because $4 k > 3 k$














\(\ds \)

\(>\)







\(\ds 4 \paren {2 k - 1} \paren {2 k + 1} \paren {3 k} \paren {3 k - 1}!\)





because $k > 4$














\(\ds \)

\(=\)







\(\ds \paren {4 k - 2} \paren {4 k + 2} \paren {3 k} \paren {3 k - 1}!\)




















\(\ds \)

\(\ge\)







\(\ds \paren {3 k + 5} \paren {3 k + 9} \paren {3 k} \paren {3 k - 1}!\)





because $k \ge 7$














\(\ds \)

\(>\)







\(\ds \paren {3 k + 1} \paren {3 k + 2} \paren {3 k} \paren {3 k - 1}!\)




















\(\ds \)

\(=\)







\(\ds \paren {3 k + 2}!\)





Definition of Factorial



The result follows by the Principle of Mathematical Induction.
$\blacksquare$





