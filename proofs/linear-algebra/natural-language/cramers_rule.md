The theorem's name is Cramer's rule which is a statement applicable in the context of linear algebra. Firstly, the theorem is only valid for all possible square matrices A that exist in the set of all nxn real-number matrices, denoted as M_n(R), and for all vectors b that exist in the set of n-dimensional real numbers, denoted as R^n. 

The theorem states that when you use Cramer's rule - or "A.cramer(b)" - on a given system of linear equations represented by matrix A and vector b, the result is equal to the scalar multiplication of the determinant of A and vector b. In cases when this holds true, we can define a few things.

To be specific, you essentially find each element at position 'i' (subscript 'i') in the resultant vector using Cramer's rule - "cramer(A,b)ᵢ". This is calculated by taking the determinant of a matrix, referred to as "A_i(b)", and dividing it by the determinant of matrix A.

Furthermore, "A_i(b)" is a special matrix obtained by replacing the 'i'th column of matrix A with vector b.

So, in summary, Cramer's rule states that: For any given system of linear equations represented by matrix A and vector b, if the result obtained by applying Cramer's rule on this system is equal to multiplying the determinant of A and vector b, then each element in the resulting vector can be found by dividing the determinant of a special matrix, obtained by replacing the 'i'th column of A with b, by the determinant of A.