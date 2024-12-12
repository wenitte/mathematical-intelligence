# 

Source: https://proofwiki.org/wiki/Closed_Form_for_Triangular_Numbers/Direct_Proof

  This article is a landmark page.  It was the first proof on $\mathsf{Pr} \infty \mathsf{fWiki}$!


Theorem
The closed-form expression for the $n$th triangular number is:

$\ds T_n = \sum_{i \mathop = 1}^n i = \frac {n \paren {n + 1} } 2$


Proof
We have that:

$\ds \sum_{i \mathop = 1}^n i = 1 + 2 + \cdots + n$
Consider $\ds 2 \sum_{i \mathop = 1}^n i$.
Then:














\(\ds 2 \sum_{i \mathop = 1}^n i\)

\(=\)







\(\ds 2 \paren {1 + 2 + \dotsb + \paren {n - 1} + n}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 + 2 + \dotsb + \paren {n - 1} + n} + \paren {n + \paren {n - 1} + \dotsb + 2 + 1}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 + n} + \paren {2 + \paren {n - 1} } + \dotsb + \paren {\paren {n - 1} + 2} + \paren {n + 1}\)





Integer Addition is Commutative, Integer Addition is Associative














\(\ds \)

\(=\)







\(\ds \paren {n + 1}_1 + \paren {n + 1}_2 + \dotsb + \paren {n + 1}_n\)




















\(\ds \)

\(=\)







\(\ds n \paren {n + 1}\)









So:














\(\ds 2 \sum_{i \mathop = 1}^n i\)

\(=\)







\(\ds n \paren {n + 1}\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{i \mathop = 1}^n i\)

\(=\)







\(\ds \frac {n \paren {n + 1} } 2\)









$\blacksquare$


Historical Note
This direct proof is the method supposedly employed by Carl Friedrich Gauss who, when very young (according to the apocryphal story), calculated the sum of the numbers from $1$ to $100$ before the teacher had barely sat back down after setting the assignment.
Whether this story is actually true or not is the subject of speculation.


Sources
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.4.2$: Mathematical induction




