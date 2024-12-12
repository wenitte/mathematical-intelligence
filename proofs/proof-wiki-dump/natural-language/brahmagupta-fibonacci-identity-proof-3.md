# 

Source: https://proofwiki.org/wiki/Brahmagupta-Fibonacci_Identity/Proof_3



Theorem
Let $a, b, c, d$ be numbers.
Then:

$\paren {a^2 + b^2} \paren {c^2 + d^2} = \paren {a c + b d}^2 + \paren {a d - b c}^2$


Proof
Lagrange's Identity gives:

$\ds \paren {\sum_{k \mathop = 1}^n {a_k}^2} \paren {\sum_{k \mathop = 1}^n {b_k}^2} - \paren {\sum_{k \mathop = 1}^n a_k b_k}^2 = \sum_{i \mathop = 1}^{n - 1} \sum_{j \mathop = i + 1}^n \paren {a_i b_j - a_j b_i}^2$

Setting $n = 2$:














\(\ds \paren {\sum_{k \mathop = 1}^2 {a_k}^2} \paren {\sum_{k \mathop = 1}^2 {b_k}^2} - \paren {\sum_{k \mathop = 1}^2 a_k b_k}^2\)

\(=\)







\(\ds \sum_{i \mathop = 1}^1 \sum_{j \mathop = i + 1}^2 \paren {a_i b_j - a_j b_i}^2\)














\(\ds \leadsto \ \ \)





\(\ds \paren { {a_1}^2 + {a_2}^2} \paren { {b_1}^2 + {b_2}^2} - \paren {a_1 b_1 + a_2 b_2}^2\)

\(=\)







\(\ds \paren {a_1 b_2 - a_2 b_1}^2\)





expanding out summations








\(\ds \leadsto \ \ \)





\(\ds \paren {a^2 + b^2} \paren {c^2 + d^2} - \paren {a c + b d}^2\)

\(=\)







\(\ds \paren {a d - b c}^2\)





renaming $a_1 \to a, a_2 \to b, b_1 \to c, b_2 \to d$








\(\ds \leadsto \ \ \)





\(\ds \paren {a^2 + b^2} \paren {c^2 + d^2}\)

\(=\)







\(\ds \paren {a c + b d}^2 + \paren {a d - b c}^2\)









$\blacksquare$


Source of Name
This entry was named for Brahmagupta‎ and Leonardo Fibonacci‎.


Historical Note
Both Brahmagupta‎ and Leonardo Fibonacci‎ described what is now known as the Brahmagupta-Fibonacci Identity in their writings:

628: Brahmagupta: Brahmasphutasiddhanta (The Opening of the Universe)
1225: Fibonacci: Liber quadratorum (The Book of Squares)

However, it appeared earlier than either of those in Diophantus of Alexandria's Arithmetica of the third century C.E.





