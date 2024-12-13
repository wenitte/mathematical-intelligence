# 

Source: https://proofwiki.org/wiki/Product_of_Summations

Theorem
$\ds \prod_{j \mathop = 1}^n \sum_{i \mathop = 1}^m a_{i j} = \sum_{1 \mathop \le i_1 \mathop , \mathop \ldots \mathop , i_n \mathop \le m} a_{i_1 1} \cdots a_{i_n n}$


Proof













\(\ds \prod_{j \mathop = 1}^n \sum_{i \mathop = 1}^m a_{i j}\)

\(=\)







\(\ds \sum_{i \mathop = 1}^m a_{i 1} \sum_{i \mathop = 1}^m a_{i 2} \cdots  \sum_{i \mathop = 1}^m a_{i n}\)





Definition of Continued Product














\(\ds \)

\(=\)







\(\ds \sum_{i_1 \mathop = 1}^m a_{i_1 1} \sum_{i_2 \mathop = 1}^m a_{i_2 2} \cdots  \sum_{i_n \mathop = 1}^m a_{i_n n}\)




















\(\ds \)

\(=\)







\(\ds \sum_{i_1 \mathop = 1}^m \sum_{i_2 \mathop = 1}^m \cdots \sum_{i_n \mathop = 1}^m a_{i_1 1} a_{i_2 2} \cdots a_{i_n n}\)





General Distributivity Theorem














\(\ds \)

\(=\)







\(\ds \sum_{1 \mathop \le i_1 \mathop , \mathop \ldots \mathop , i_n \mathop \le m} a_{i_1 1} \cdots a_{i_n n}\)









$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: Exercise $32$




