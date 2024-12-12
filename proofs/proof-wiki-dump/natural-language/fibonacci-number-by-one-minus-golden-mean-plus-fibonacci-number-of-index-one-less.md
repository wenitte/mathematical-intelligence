# 

Source: https://proofwiki.org/wiki/Fibonacci_Number_by_One_Minus_Golden_Mean_plus_Fibonacci_Number_of_Index_One_Less



Theorem
Let $n \in \Z$.
Then:

$\hat \phi^n = F_n \hat \phi + F_{n - 1}$
where:

$F_n$ denotes the $n$th Fibonacci number
$\hat \phi$ denotes the $1$ minus the golden mean:
$\hat \phi := 1 - \phi$


Proof













\(\ds F_n \hat \phi + F_{n - 1}\)

\(=\)







\(\ds F_n \paren {-\dfrac 1 \phi} + F_{n - 1}\)





Reciprocal Form of One Minus Golden Mean














\(\ds \)

\(=\)







\(\ds -\dfrac 1 \phi \paren {F_n - \phi F_{n - 1} }\)




















\(\ds \)

\(=\)







\(\ds -\dfrac 1 \phi \paren {\paren {-1}^{n + 1} F_{-n} - \phi \paren {-1}^n F_{-\paren {n - 1} } }\)





Fibonacci Number with Negative Index














\(\ds \)

\(=\)







\(\ds -\dfrac 1 \phi \paren {\paren {-1}^{n + 1} F_{-n} + \phi \paren {-1}^{n + 1} F_{-\paren {n - 1} } }\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^{n + 1} \paren {-\dfrac 1 \phi \paren {F_{-n} + \phi F_{-n + 1} } }\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^{n + 1} \paren {-\dfrac 1 \phi } \paren {\phi^{-n + 1} }\)





Fibonacci Number by Golden Mean plus Fibonacci Number of Index One Less














\(\ds \)

\(=\)







\(\ds \paren {-1}^n \paren {\dfrac 1 {\phi^n} }\)




















\(\ds \)

\(=\)







\(\ds \paren {-\dfrac 1 \phi}^n\)




















\(\ds \)

\(=\)







\(\ds \hat \phi^n\)









$\blacksquare$


Also see
Fibonacci Number by Golden Mean plus Fibonacci Number of Index One Less


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: Exercise $11$




