# 

Source: https://proofwiki.org/wiki/Difference_of_Logarithms



Theorem
Let $x, y, b \in \R$ be strictly positive real numbers such that $b > 1$.

Then:

$\log_b x - \log_b y = \map {\log_b} {\dfrac x y}$
where $\log_b$ denotes the logarithm to base $b$.


Proof 1













\(\ds \log_b x - \log_b y\)

\(=\)







\(\ds \map {\log_b} {b^{\log_b x - \log_b y} }\)





Definition of General Logarithm














\(\ds \)

\(=\)







\(\ds \map {\log_b} {\frac {\paren {b^{\log_b x} } } {\paren {b^{\log_b y} } } }\)





Quotient of Powers














\(\ds \)

\(=\)







\(\ds \map {\log_b} {\frac x y}\)





Definition of General Logarithm



$\blacksquare$


Proof 2













\(\ds \log_b x - \log_b y\)

\(=\)







\(\ds \frac {\log_e x} {\log_e b} - \frac {\log_e y} {\log_e b}\)





Change of Base of Logarithm














\(\ds \)

\(=\)







\(\ds \frac {\log_e x - \log_e y} {\log_e b}\)




















\(\ds \)

\(=\)







\(\ds \frac {\log_e \left({\frac x y}\right)} {\log_e b}\)





Difference of Logarithms: Proof for Natural Logarithm














\(\ds \)

\(=\)







\(\ds \log_b \left({\frac x y}\right)\)





Change of Base of Logarithm



$\blacksquare$


Proof 3













\(\ds \map {\log_b} {\frac x y} + \log_b y\)

\(=\)







\(\ds \map {\log_b} {\frac x y \times y}\)





Sum of Logarithms














\(\ds \)

\(=\)







\(\ds \log_b x\)














\(\ds \leadsto \ \ \)





\(\ds \map {\log_b} {\frac x y}\)

\(=\)







\(\ds \log_b x - \log_b y\)





subtracting $\log_b y$ from both sides



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 7$: Laws of Logarithms: $7.11$
1972: Murray R. Spiegel and R.W. Boxer: Theory and Problems of Statistics (SI ed.) ... (previous) ... (next): Chapter $1$: Computations Using Logarithms




