# 

Source: https://proofwiki.org/wiki/Difference_Between_Adjacent_Square_Roots_Converges

  This article was Featured Proof between 12th July 2012 and 22nd July 2012.


Theorem
Let $\sequence {x_n}$ be the sequence in $\R$ defined as $x_n = \sqrt {n + 1} - \sqrt n$.

Then $\sequence {x_n}$ converges to a zero limit.


Proof
We have:














\(\ds 0\)

\(\le\)







\(\ds \sqrt {n + 1} - \sqrt n\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {\sqrt {n + 1} - \sqrt n} \paren {\sqrt {n + 1} + \sqrt n} } {\sqrt {n + 1} + \sqrt n}\)





multiplying top and bottom by $\sqrt {n + 1} - \sqrt n$














\(\ds \)

\(=\)







\(\ds \frac {n + 1 - n} {\sqrt {n + 1} + \sqrt n}\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt {n + 1} + \sqrt n}\)




















\(\ds \)

\(<\)







\(\ds \frac 1 {\sqrt n}\)





as $\sqrt {n + 1} + \sqrt n > \sqrt n$



But from Sequence of Powers of Reciprocals is Null Sequence, $\dfrac 1 {\sqrt n} \to 0$ as $n \to \infty$.
The result follows by the Squeeze Theorem.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 4$: Convergent Sequences: Exercise $\S 4.20 \ (3)$




