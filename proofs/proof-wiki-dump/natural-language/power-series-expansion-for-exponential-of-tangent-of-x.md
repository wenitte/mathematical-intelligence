# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Exponential_of_Tangent_of_x

Theorem
$e^{\tan x} = 1 + x + \dfrac {x^2} 2 + \dfrac {x^3} 2 + \dfrac {3 x^4} 8 + \cdots$
for all $x \in \R$ such that $\size x < \dfrac \pi 2$.


Proof
Let $\map f x = e^{\tan x}$.
Then:















\(\ds \frac \d {\d x} \map f x\)

\(=\)







\(\ds \sec^2 x \, e^{\tan x}\)





Chain Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \frac {\d^2} {\d x^2} \map f x\)

\(=\)







\(\ds \sec^2 x \frac \d {\d x} e^{\tan x} + e^{\tan x} \frac \d {\d x} \sec^2 x\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \sec^4 x \, e^{\tan x} + e^{\tan x} 2 \sec^2 x \tan x\)




















\(\ds \)

\(=\)







\(\ds \paren {\sec^2 x + 2 \tan x} \sec^2 x \, e^{\tan x}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d^3} {\d x^3} \map f x\)

\(=\)







\(\ds \paren {\sec^2 x + 2 \tan x} \frac \d {\d x} \sec^2 x \, e^{\tan x} + \sec^2 x \, e^{\tan x} \frac \d {\d x} \paren {\sec^2 x + 2 \tan x}\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \paren {\sec^2 x + 2 \tan x} \paren {\sec^2 x + 2 \tan x} \sec^2 x \, e^{\tan x} + \sec^2 x \, e^{\tan x} \paren {2 \sec^2 x \tan x + 2 \sec^2 x}\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {\sec^2 x + 2 \tan x}^2 + 2 \sec^2 x \tan x + 2 \sec^2 x} \sec^2 x \, e^{\tan x}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d^4} {\d x^4} \map f x\)

\(=\)







\(\ds \paren {\paren {\sec^2 x + 2 \tan x}^2 + 2 \sec^2 x \tan x + 2 \sec^2 x} \frac \d {\d x} \sec^2 x \, e^{\tan x}\)





Product Rule for Derivatives














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \sec^2 x \, e^{\tan x} \frac \d {\d x} \paren {\paren {\sec^2 x + 2 \tan x}^2 + 2 \sec^2 x \tan x + 2 \sec^2 x}\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {\sec^2 x + 2 \tan x}^2 + 2 \sec^2 x \tan x + 2 \sec^2 x} \paren {\sec^2 x + 2 \tan x} \sec^2 x \, e^{\tan x}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \sec^2 x \, e^{\tan x} \paren {2 \paren {\sec^2 x + 2 \tan x} \paren {2 \sec^2 x \tan x + 2 \sec^2 x} + 4 \sec^2 x \tan^2 x + 2 \sec^4 x + 4 \sec^2 x \tan x}\)










By definition of Taylor series:

$\ds \map f x \sim \sum_{n \mathop = 0}^\infty \frac {\paren {x - \xi}^n} {n!} \map {f^{\paren n} } \xi$
This is to be expanded about $\xi = 0$.

Note that $\tan 0 = 0$ and $\sec 0 = 1$.
Thus:














\(\ds \map f 0\)

\(=\)







\(\ds e^0\)




















\(\ds \)

\(=\)







\(\ds 1\)




















\(\ds \valueat {\frac \d {\d x} \map f x} {x \mathop = 0}\)

\(=\)







\(\ds \sec^2 0 \, e^{\tan 0}\)




















\(\ds \)

\(=\)







\(\ds 1 \times e^0\)




















\(\ds \)

\(=\)







\(\ds 1\)




















\(\ds \valueat {\frac {\d^2} {\d x^2} \map f x} {x \mathop = 0}\)

\(=\)







\(\ds \paren {\sec^2 0 + 2 \tan 0} \sec^2 0 \, e^{\tan 0}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 + 0} 1 \times e^0\)




















\(\ds \)

\(=\)







\(\ds 1\)




















\(\ds \valueat {\frac {\d^3} {\d x^3} \map f x} {x \mathop = 0}\)

\(=\)







\(\ds \paren {\paren {\sec^2 0 + 2 \tan 0}^2 + 2 \sec^2 0 \tan 0 + 2 \sec^2 0} \sec^2 0 \, e^{\tan 0}\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {1 + 0}^2 + 2 \times 1 \times 0 + 2} 1 \times e^0\)




















\(\ds \)

\(=\)







\(\ds 3\)




















\(\ds \valueat {\frac {\d^4} {\d x^4} \map f x} {x \mathop = 0}\)

\(=\)







\(\ds \paren {\paren {\sec^2 0 + 2 \tan 0}^2 + 2 \sec^2 0 \tan 0 + 2 \sec^2 0} \paren {\sec^2 0 + 2 \tan 0} \sec^2 0 \, e^{\tan 0}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \sec^2 0 \, e^{\tan 0} \paren {2 \paren {\sec^2 0 + 2 \tan 0} \paren {2 \sec^2 0 \tan 0 + 2 \sec^2 0} + 4 \sec^2 0 \tan^2 0 + 2 \sec^4 0 + 4 \sec^2 0 \tan 0}\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {1 + 0}^2 + 0 + 2} \paren {1 + 0} + \paren {2 \paren {1 + 0} \paren {0 + 2} + 0 + 2 + 0}\)




















\(\ds \)

\(=\)







\(\ds 9\)










Hence:














\(\ds \map f x\)

\(\sim\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {x - \xi}^n} {n!} \map {f^{\paren n} } \xi\)




















\(\ds \)

\(=\)







\(\ds \paren {1 \times 1} + \paren {x \times 1} + \paren {\dfrac {x^2} {2!} \times 1} + \paren {\dfrac {x^3} {3!} \times 3} + \paren {\dfrac {x^4} {4!} \times 9} + \cdots\)




















\(\ds \)

\(=\)







\(\ds 1 + x + \dfrac {x^2} 2 + \dfrac {x^3} 2 + \dfrac {3 x^4} 8 + \cdots\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 20$: Miscellaneous Series: $20.45$




