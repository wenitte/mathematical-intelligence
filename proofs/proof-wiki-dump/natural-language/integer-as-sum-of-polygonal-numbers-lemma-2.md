# 

Source: https://proofwiki.org/wiki/Integer_as_Sum_of_Polygonal_Numbers/Lemma_2

Theorem
Let $n, m \in \R_{>0}$ such that $\dfrac n m \ge 1$.
Define $I$ to be the open real interval:

$I = \openint {\dfrac 2 3 + \sqrt {8 \paren {\dfrac n m} - 8} } {\dfrac 1 2 + \sqrt {6 \paren {\dfrac n m} - 3} }$
Then:

For $\dfrac n m \ge 116$, the length of $I$ is greater than $4$.


Proof
We need to show that $\paren {\dfrac 2 3 + \sqrt {8 \paren {\dfrac n m} - 8} } - \paren {\dfrac 1 2 + \sqrt {6 \paren {\dfrac n m} - 3}} > 4$ when $\dfrac n m \ge 116$.
Let $x = \dfrac n m - 1$. 
Then:














\(\ds \paren {\frac 2 3 + \sqrt {8 \paren {\frac n m} - 8} } - \paren {\frac 1 2 + \sqrt {6 \paren {\frac n m} - 3} }\)

\(>\)







\(\ds 4\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \sqrt {8 x} - \sqrt {6 x + 3}\)

\(>\)







\(\ds \frac {23} 6\)









To simplify calculations, we consider:














\(\ds \sqrt {8 x} - \sqrt {6 x + 3}\)

\(>\)







\(\ds 4\)





which is greater than $\dfrac {23} 6$








\(\ds \leadstoandfrom \ \ \)





\(\ds 8 x + 6 x + 3 - 2 \sqrt {48 x^2 + 24 x}\)

\(>\)







\(\ds 16\)





squaring Both Sides








\(\ds \leadstoandfrom \ \ \)





\(\ds \sqrt {48 x^2 + 24 x}\)

\(<\)







\(\ds 7 x - \frac {13} 2\)














\(\ds \leadstoandfrom \ \ \)





\(\ds 48 x^2 + 24 x\)

\(<\)







\(\ds 49 x^2 - 91 x + \frac {169} 4\)





squaring Both Sides








\(\ds \leadstoandfrom \ \ \)





\(\ds x^2 - 115 x + \frac {169} 4\)

\(>\)







\(\ds 0\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x \paren {x - 115} + \frac {169} 4\)

\(>\)







\(\ds 0\)









which is true when $x \ge 115$.
Thus this condition is satisfied when $\dfrac n m \ge 116$.
$\blacksquare$


Sources
Jan 1987: Melvyn B. Nathanson: A Short Proof of Cauchy's Polygonal Number Theorem (Proceedings of the American Mathematical Society Vol. 99, no. 1: pp. 22 – 24)




