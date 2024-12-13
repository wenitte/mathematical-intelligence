# 

Source: https://proofwiki.org/wiki/Linear_Diophantine_Equation/Examples/17x_%2B_15y_%3D_143



Example of Linear Diophantine Equation
The linear diophantine equation:

$17 x + 15 y = 143$
has the general solution in positive integers:

$\tuple {x, y} = \tuple {4, 5}$


Proof
Using the Euclidean Algorithm:




\(\text {(1)}: \quad\)









\(\ds 17\)

\(=\)







\(\ds 1 \times 15 + 2\)










\(\text {(2)}: \quad\)









\(\ds 15\)

\(=\)







\(\ds 7 \times 2 + 1\)









Thus we have that:

$\gcd \set {17, 15} = 1$
which is (trivially) a divisor of $143$.
So, from Solution of Linear Diophantine Equation, a solution exists.

Next we find a single solution to $17 x + 15 y = 143$.
Again with the Euclidean Algorithm:














\(\ds 1\)

\(=\)







\(\ds 15 - 7 \times 2\)





from $(2)$














\(\ds \)

\(=\)







\(\ds 15 - 7 \times \paren {17 - 1 \times 15}\)





from $(1)$














\(\ds \)

\(=\)







\(\ds 8 \times 15 - 7 \times 17\)














\(\ds \leadsto \ \ \)





\(\ds 143\)

\(=\)







\(\ds 143 \times \paren {8 \times 15 - 7 \times 17}\)




















\(\ds \)

\(=\)







\(\ds 1144 \times 15 - 1001 \times 17\)










and so:














\(\ds x_0\)

\(=\)







\(\ds 1001\)




















\(\ds y_0\)

\(=\)







\(\ds 1144\)









is a solution.

From Solution of Linear Diophantine Equation, the general solution is:

$\forall t \in \Z: x = x_0 + \dfrac b d t, y = y_0 - \dfrac a d t$
where $d = \gcd \set {a, b}$.
In this case:














\(\ds x_0\)

\(=\)







\(\ds 1001\)




















\(\ds y_0\)

\(=\)







\(\ds 1144\)




















\(\ds a\)

\(=\)







\(\ds 17\)




















\(\ds b\)

\(=\)







\(\ds 15\)




















\(\ds d\)

\(=\)







\(\ds 1\)










giving:














\(\ds x\)

\(=\)







\(\ds -1001 + 15 t\)




















\(\ds y\)

\(=\)







\(\ds 1144 - 17 t\)










Both $x$ and $y$ must be non-negative integers.
Hence:














\(\ds 1144 - 17 t\)

\(\ge\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds 17 t\)

\(\le\)







\(\ds 1144\)














\(\ds \leadsto \ \ \)





\(\ds t\)

\(\le\)







\(\ds \dfrac {1144} {17} = 67 + \dfrac 5 {17}\)














\(\ds \leadsto \ \ \)





\(\ds t\)

\(\le\)







\(\ds 67\)









and:














\(\ds -1001 + 15 t\)

\(\ge\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds 15 t\)

\(\ge\)







\(\ds 1001\)














\(\ds \leadsto \ \ \)





\(\ds t\)

\(\ge\)







\(\ds \dfrac {1001} {15} = 66 + \dfrac {11} {15}\)














\(\ds \leadsto \ \ \)





\(\ds t\)

\(>\)







\(\ds 66\)










Hence $t = 67$ and so:














\(\ds x\)

\(=\)







\(\ds -1001 + 15 \times 67\)




















\(\ds \)

\(=\)







\(\ds 4\)




















\(\ds y\)

\(=\)







\(\ds 1144 - 17 \times 67\)




















\(\ds \)

\(=\)







\(\ds 5\)










The required solution is therefore:

$x = 4, y = 5$
$\blacksquare$


Historical Note
This exercise was originally couched in the language of a person making a purchase of:

$x$ items of commodity $A$, costing $17$ monetary units each
and:

$y$ items of commodity $B$, costing $15$ monetary units each
for a total outlay of $143$ monetary units.

It is apparent in this context that both $x$ and $y$ must be non-negative, and (in the specific wording of the question) can be interpreted as actually strictly positive.
Such exercises are usually (as this one is) specifically crafted so as to allow for only one solution.


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-3}$ The Linear Diophantine Equation: Exercise $2$




