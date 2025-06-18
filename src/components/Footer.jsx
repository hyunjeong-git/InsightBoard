const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} My Website. All rights reserved. Icons by Icons8
        </p>
      </div>
    </footer>
  );
}

export default Footer;